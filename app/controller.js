var Marionette = require('marionette');
var style = require("./public/css/style.scss");
var Users = require("./collections/Users");
var TableView = require("./views/TableView");
var LoginView = require("./views/LoginView");

var Controller = Marionette.Object.extend({
  
  initialize: function(options){
    
    this.app = options.app;
    
    this.users = new Users();
    this.users.fetch();
    
  },
  
  login: function(){
    this.app.view.showChildView('main', new LoginView());
  },
  index: function(){
    this.app.view.showChildView('main', new TableView({ collection: this.users }));
  }
  
  
});

module.exports = Controller;
