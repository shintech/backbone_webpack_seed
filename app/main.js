global.jQuery = require('jquery');
require('bootstrap');
String.prototype.capitalizedFirstLetter = function(){
  return this.charAt(0).toUpperCase() + this.slice(1);
};

var App = require("./App");

var app = new App();
app.start();

module.exports = app;
