Quack.Collections.Messages = Backbone.Collection.extend({
  url: "api/messages",

  model: Quack.Models.Message,

  initialize: function(model, options) {
    if (!this.page) {
      this.page = 1
    }
    this.channel = options.channel;
  },

  // comparator: function (message) {
  //   return message.get("timestamp")
  // },

  parse: function(response) {
    this.page = response.page
    this.total_pages = response.total_pages
    this.total_messages = response.total_messages

    return response.messages
  }

});
