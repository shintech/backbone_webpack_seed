var UserView = require("./UserView");

var UsersView = Backbone.Marionette.CollectionView.extend({
  tagName: 'tbody',
  childView: UserView,
  initialize: function(){
    this.listenTo(Backbone, 'users:filter', this.onFilter);
  },
  onFilter: function(e){
    var target = e[0];
    var filter = e[1];
    if(target == 'last_name' || target == 'email' || target == 'title'){
      filter = filter.toLowerCase();
    }
    this.filter = function(child, index, collection){
      return child.get(target).toLowerCase().includes(filter);
    };
    this.render();
  }
});

module.exports = UsersView;