var Marionette = require('marionette');
var BaseCollectionView = require("./views/BaseCollectionView");
var RouterView = require("./views/RouterView");
var BaseCollection = require("./collections/BaseCollection");
var style = require("./public/css/style.scss");

var Controller = Marionette.Object.extend({
  
  initialize: function(options){
    
    this.app = options.app;
    
    var baseCollection = new BaseCollection();
    var baseCollectionView = new BaseCollectionView({ collection: baseCollection });

    baseCollection.fetch({
      success: function(){
        console.log("Successfully fetched baseCollection...");
      },
      error: function(err){
        console.log("Error: " + err);
      }
    });
    
    this.options.baseCollectionView = baseCollectionView;
    this.app.view.showChildView('main', this.options.baseCollectionView);
    
  },
  
  oneRoute: function(){
    this.app.view.showChildView('routerView', new RouterView({ message: "This is Route Number #1!" }));
  },
  
  twoRoute: function(){
    this.app.view.showChildView('routerView', new RouterView({ message: 'This is Route Number #2!' }));
  }
  
});

module.exports = Controller;
