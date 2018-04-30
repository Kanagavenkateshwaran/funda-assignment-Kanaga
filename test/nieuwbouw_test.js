var nieuwbouw = require('../page_objects/nieuwbouw.js');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var mocha = require('Mocha');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;
var should = chai.should;
var page;

describe('#nieuwbouw', function () {
    this.timeout(30000);
    page = new nieuwbouw();
    beforeEach(async function () {
        await page.visit('https://www.funda.nl/nieuwbouw');
    });
    /* afterEach(function () {
         page.quit();
     }); */
    describe('Validation of input values for #nieuwbouw #Postive', async function () {

        it('Should navigate to valid search results for entered postcode', function () {
            page.autoInput('1098');
            page.clickSubmit();
            expect(page.getURL()).to.contain('1098');

        });
        it('Should navigate to valid search results for entered CityName', function () {
            page.autoInput('Amsterdam');
            page.clickSubmit();
            expect(page.getURL()).to.contain('Amsterdam');

        });
        it('Should navigate to valid search results for entered Address', function () {
            page.autoInput('Middenweg');
            page.clickSubmit();
            expect(page.getURL()).to.contain('straat-MiddenWeg');

        });
        it('Should Navigate to search results page with the distance in the URL', async function () {
            page.distance('+ 15 km');
            page.clickSubmit();
            expect(page.getURL()).to.contain('+ 5 km');
        });
    })

    describe('Validation of input values for #nieuwbouw #Negative', async function () {

        it('Should not Navigate to search results invalid entered postcode/address/City', function () {
            page.autoInput('@#$$%%');
            page.clickSubmit();
            expect(page.getURL()).to.deep.equal('https://www.funda.nl/niewbouw/');

        });
    });

    describe('Validation of input values for #nieuwbouw #BoundaryValues', async function () {

        it('Should not Navigate to search results invalid entered postcode/address/City', function () {
            page.distance('+ 0 KM');
            page.clickSubmit()
            expect(page.getURL()).eventually.to.contain('€ 0');

        });
        it('Should change to maximum price to higher value then Min price,  if Maximum price is less than minimum price', function () {
            page.distance('+ 15 KM');
            page.clickSubmit();
            expect(page.getURL()).to.deep.contain('https://www.funda.nl/heel-nederland/');
        });

    });


});
