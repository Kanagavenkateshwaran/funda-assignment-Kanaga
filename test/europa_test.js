var europa = require('../page_objects/europa.js');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var mocha = require('Mocha');
var chai = require('chai');
var chaiAspromised = require('chai-as-promised');
var should = chai.should();
chai.use(chaiAspromised);

var searchCom;
describe('Test scenarios for search component', function () {
    this.timeout(30000);
    searchCom = new europa();

    beforeEach(async function () {
        await searchCom.visit('https://www.funda.nl/europe/');
    });

    describe('Validation of input values for #Europe #Postive', async function () {

        it('Should navigate to valid search results page for Belgium', function () {
            searchCom.country("Belgium");
            page.clickSubmit();
            expect(page.getURL()).to.contain('Belgium');

        });
        it('Should navigate to valid search results page for Albania', function () {
            searchCom.country("Albania")
            page.clickSubmit();
            expect(page.getURL()).to.contain("Albania");
        });
    });
});