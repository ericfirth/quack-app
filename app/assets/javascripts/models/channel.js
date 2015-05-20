Quack.Models.Channel = Backbone.Model.extend(
  _.extend({}, Quack.Mixins.Starable, {
    urlRoot: "api/channels",

    messages: function() {
      if (!this._messages) {
        this._messages = new Quack.Collections.Messages([], { channel: this })
      }

      return this._messages;
    },

    starableOptions: {
      foreignKey: "starable_id"
    },

    parse: function (response) {
      // this.set("starred") = response.starred
      // delete response.starred

      if (response.star_id) {
        this.star().set("id", response.star_id)
        delete response.star_id
      }

      if (response.messages) {
        this.messages().set(response.messages);
        delete response.messages;
      }

      return response;
    }
  })
);
