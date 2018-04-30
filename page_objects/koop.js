var koop = require('../testbase.js');
var mocha = require('Mocha');

koop.prototype.autoInput = function(input){
    this.write('.autocomplete-input',input);
}

koop.prototype.clickSubmit = function(){
     this.submit('.button-primary-alternative');

}
koop.prototype.distance = function(dist){
    this.select('#Straal',dist,'option');

}
koop.prototype.minPrice = function(miniPrice){
    this.select('#range-filter-selector-select-filter_koopprijsvan',miniPrice,'option');

}
koop.prototype.maxPrice = function(maxiPrice){
    this.select('#range-filter-selector-select-filter_koopprijstot',maxiPrice,'option');

}
koop.prototype.getURL = function(){
    this.getCurUrl();
}

koop.prototype.getColour = function(){
    this.getColor('#range-filter-selector-select-filter_koopprijstot');
}

koop.prototype.getautoInput = function(){
    this.getTxt('.autocomplete-input');
}
koop.prototype.getdistance = function(){
    this.getTxt('#Straal');
}
koop.prototype.getMaxPrice = function(){
    this.getTxt('#range-filter-selector-select-filter_koopprijsvan');
}
koop.prototype.getMinPrice = function(){
    this.getTxt('#range-filter-selector-select-filter_koopprijstot');
}

koop.prototype.getURL = function(){
    this.getCurUrl('#range-filter-selector-select-filter_koopprijstot');
}


module.exports = koop;