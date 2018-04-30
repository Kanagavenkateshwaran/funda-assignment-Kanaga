var koop = require('../page_objects/koop.js');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var mocha = require('Mocha');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;
var should = chai.should;
var page;

describe('#koop', function () {
    this.timeout(30000);
    page = new koop();
    beforeEach(async function () {
        await page.visit('https://www.funda.nl/');
    });
    /* afterEach(function () {
         page.quit();
     }); */
    describe('Validation of input values for #koop #Postive', async function () {

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
            page.distance('+ 5 km');
            page.clickSubmit();
            expect(page.getURL()).to.contain('+ 5 km');
        });
        it('Should Navigate to search results page with the minPrice in the URL', async function () {
            page.minPrice('€ 200.000');
            page.clickSubmit();
            expect(page.getURL()).to.contain('€ 200.000');
        });
        it('Should Navigate to search results page with the Maximum price in the URL', async function () {
            page.minPrice('€ 500.000');
            page.clickSubmit();
            expect(page.getURL()).to.contain('€ 500.000');
        });

    })

    describe('Validation of input values for #koop #Negative', async function () {

        it('Should not Navigate to search results invalid entered postcode/address/City', function () {
            page.autoInput('@#$$%%');
            page.clickSubmit();
            expect(page.getURL()).to.deep.equal('https://www.funda.nl/');

        });
        it('Should change to maximum price to higher value then Min price,  if Maximum price is less than minimum price', function () {
            page.minPrice('€ 200.000');
            page.maxPrice('€ 50.000');
            expect(page.getColour()).to.equal('rgb(51, 51, 51)')

        });

    });

    describe('Validation of input values for #koop #BoundaryValues', async function () {

        it('Should not Navigate to search results invalid entered postcode/address/City', function () {
            page.minPrice('€ 2.000.000');
            page.maxPrice('Geen maximum')
            page.clickSubmit()
            expect(page.getURL()).eventually.to.contain('€ 0');

        });
        it('Should change to maximum price to higher value then Min price,  if Maximum price is less than minimum price', function () {
            page.minPrice('€ 0');
            page.maxPrice('€ 50.000')
            page.clickSubmit();
            expect(page.getURL()).to.deep.contain('https://www.funda.nl/heel-nederland/');



        });

    });


});
