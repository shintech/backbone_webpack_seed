var UserView = Backbone.Marionette.View.extend({
  tagName: 'tr',
  template: require("../templates/user-view-template.html"),
  serializeData: function(){
    return {
      "first_name": this.model.get('first_name').capitalizedFirstLetter(),
      "last_name": this.model.get('last_name').capitalizedFirstLetter(),
      "phone": this.model.get('phone').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'),
      "email": this.model.get('email'),
      "title": this.model.get('title')
    };    
  }
});

module.exports = UserView;