var SearchView = Backbone.Marionette.View.extend({
  template: require("../templates/search-view-template.html"),
  initialize: function(){

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

module.exports = SearchView;