var nieuwbouw = require('../testbase.js');
var mocha = require('Mocha');

nieuwbouw.prototype.autoInput = function(input){
    this.write('#autocomplete-input',input);
}

nieuwbouw.prototype.clickSubmit = function(){
    this.submit('.button-primary-alternative');

}
nieuwbouw.prototype.distance = function(dist){
   this.select('#Straal',dist);

}
nieuwbouw.prototype.getautoInput = function(){
    this.getTxt('.autocomplete-input');
}
nieuwbouw.prototype.getdistance = function(){
    this.getTxt('#Straal');
}
module.exports = nieuwbouw;