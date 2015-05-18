Quack.Collections.StarredMessages = Backbone.Collection.extend({
  // url: "api/stars",
  model: Quack.Models.Star,

  initialize: function(model, options) {
    this.user = options.user
  }

});
