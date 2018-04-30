var europa = require('../testbase.js');
var mocha = require('Mocha');

europa.prototype.country = function(land){
    this.select('.selectbox-list',land,'li');
 
 }
 europa.prototype.clickSubmit = function(){
    this.submit('.button-primary-alternative');

}
europa.prototype.getCountry = function(){
    this.getTxt('#content > div.home-search > div.search-block > form > div.search-block__body > div > fieldset > div > div > div.selected-option');
}

module.exports = europa;