Quack.Models.Channel = Backbone.Model.extend({
  urlRoot: "api/channels",

  messages: function() {
    if (!this._messages) {
      this._messages = new Quack.Collections.Messages([], { channel: this })
    }

    return this._messages;
  },

  parse: function (response) {
    if (response.messages) {
      this.messages().set(response.messages);
      delete response.messages;
    }

    return response;
  }
})
