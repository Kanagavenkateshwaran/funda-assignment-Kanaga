var homepage = require('../page_objects/home_page.js');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var mocha = require('Mocha');
var chai = require('chai');
var chaiAspromised = require('chai-as-promised');
var should = chai.should();
chai.use(chaiAspromised);
var expect = chai.expect;
var should = chai.should;

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

    describe('Validation of recently search', async function () {

        it('Should navigate to Niewbouw page', function () {
             searchCom.searchBlock('Nieuwbouw');
             expect(searchCom.searchLabel()).to.equal("Zoek direct nieuwbouwprojecten in Amsterdam, Utrecht, Rotterdam, Den Haag, Eindhoven, Tilburg, Groningen, Breda, Nijmegen of Apeldoorn.")
        });
        it('Should navigate to huur page', function () {
            searchCom.searchBlock('Huur');
            expect(searchCom.searchLabel()).to.equal("Zoek direct nieuwbouwprojecten in Amsterdam, Utrecht, Rotterdam, Den Haag, Eindhoven, Tilburg, Groningen, Breda, Nijmegen of Apeldoorn.")
       });
    });
});