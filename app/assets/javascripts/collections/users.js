Quack.Collections.Users = Backbone.Collection.extend({
  // url: "api/users"
  model: Quack.Models.User,

  initialize: function(model, options) {
    this.teamSite = options.teamSite
  }
})
