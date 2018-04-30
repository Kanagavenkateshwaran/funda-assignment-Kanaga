var homePage = require('../testbase.js');
var mocha = require('Mocha');

homePage.prototype.searchBlock = function(navBar){
    this.select('#content > div.home-search > div.search-block.has-price-range > form > nav > ul',navBar,'li');

}
homePage.prototype.searchLabel = function(){
    return this.getTxt('#content > div.home-search > div.search-block > form > div.search-block__body > p');

}

homePage.prototype.getLabel = function(){
    return this.find('.#content > div.home-search > div.search-block > form > div.search-block__body > p').getText();

}
module.exports = homePage;