Quack.Collections.Channels = Backbone.Collection.extend({
  url: "api/channels",

  model: Quack.Models.Channel,

  initialize: function (model, options) {
    this.teamSite = options.teamSite;
  }
})
