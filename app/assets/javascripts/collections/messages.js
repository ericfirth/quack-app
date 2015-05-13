Quack.Collections.Messages = Backbone.Collection.extend({
  url: "api/messages",

  model: Quack.Models.Message,

  initialize: function(model, options) {
    this.channel = options.channel;
  }
});
