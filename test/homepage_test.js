var homepage = require('../page_objects/home_page.js');
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
    searchCom = new homepage();

    beforeEach(async function () {
        await searchCom.visit('https://www.funda.nl/');
    });

    /*     afterEach(function () {
            searchCom.quit();
        }); */

    describe('Validation of Navigation bar', async function () {

        it('Should navigate to Koop page', function () {
            searchCom.searchBlock('koop');
            expect(page.getURL()).to.contain('koop');
        });
        it('Should navigate to Huur page', function () {
            searchCom.searchBlock('Huur');
            expect(page.getURL()).to.contain('huur');
        });
        it('Should navigate to recreatie page', function () {
            searchCom.searchBlock('Recreatie');
            expect(page.getURL()).to.contain('recreatie');
        });
        it('Should navigate to recreatie page', function () {
            searchCom.searchBlock('Nieuwbouw');
            expect(page.getURL()).to.contain('nieuwbouw');
        });
        it('Should navigate to recreatie page', function () {
            searchCom.searchBlock('Europa');
            expect(page.getURL()).to.contain('europe');
        });
    });

});