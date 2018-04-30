var huur = require('../testbase.js');
var mocha = require('Mocha');

huur.prototype.autoInput = function(input){
    this.write('#autocomplete-input',input);
}

huur.prototype.clickSubmit = function(){
     this.submit('.button-primary-alternative');

}
huur.prototype.distance = function(dist){
    this.select('#Straal',dist);

}
huur.prototype.minPrice = function(miniPrice){
    this.select('#range-filter-selector-select-filter_huurprijsvan',miniPrice);

}
huur.prototype.maxPrice = function(maxiPrice){
    this.select('#range-filter-selector-select-filter_huurprijstot',maxiPrice);

}
huur.prototype.getautoInput = function(){
    this.getTxt('.autocomplete-input');
}
huur.prototype.getdistance = function(){
    this.getTxt('#Straal');
}
huur.prototype.getMaxPrice = function(){
    this.getTxt('#range-filter-selector-select-filter_koopprijsvan');
}
huur.prototype.getMinPrice = function(){
    this.getTxt('#range-filter-selector-select-filter_koopprijstot');
}

module.exports = huur;