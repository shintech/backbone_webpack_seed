var UsersView = require("./UsersView");
var SearchView = require("./SearchView");

var TableView = Backbone.Marionette.View.extend({
  tagName: 'div',
  template: require("../templates/table-view-template.html"), 
  regions: {
    body: {
      el: 'tbody',
      replaceElement: true
    },
    footer: {
      el: '.panel-footer'
    }
  },
  
  onRender: function(){
    this.showChildView('body', new UsersView({ collection: this.collection }));
    this.showChildView('footer', new SearchView({ collection: this.collection }));
  },
  
});

module.exports = TableView;