var recreatie = require('../testbase.js');
var mocha = require('Mocha');

recreatie.prototype.autoInput = function(input){
    this.write('#autocomplete-input',input);
}

recreatie.prototype.clickSubmit = function(){
    this.submit('.button-primary-alternative');

}
recreatie.prototype.distance = function(dist){
   this.select('#Straal',dist);

}
recreatie.prototype.getautoInput = function(){
    this.getTxt('.autocomplete-input');
}
recreatie.prototype.getdistance = function(){
    this.getTxt('#Straal');
}
module.exports = recreatie;