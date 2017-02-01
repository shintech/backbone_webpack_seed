var NavigationView = Backbone.Marionette.View.extend({
  tagName: 'nav',
  className: 'navbar navbar-inverse',
  initialize: function(options){
    this.title = options.title;
  },
  template: require("../templates/navigation-view-template.html"),
  serializeData: function(){
    return {
      "title": this.title
    };
  },
  events: {
    'keyup .search-field': 'searchFunction',
  },
  searchFunction: function(e){
    var filter = $(e.currentTarget).val();
    var target = $('[name="target-radio"]:radio:checked').val();
    Backbone.trigger('users:filter', [target, filter]);
  }
});

module.exports = NavigationView;