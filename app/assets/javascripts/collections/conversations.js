Quack.Collections.Conversation = Backbone.Collection.extend({
  url: function () {
    return "api/conversations/" + this.otherUserId;
  },

  model: Quack.Models.PrivateMessage,

  initialize: function (model, options) {
    this.otherUserId = options.otherUserId;
  },

  // comparator: function (message) {
  //   return message.get("created_at");
  // },

  otherUser: function () {
    if (!this._otherUser) {
      this._otherUser = new Quack.Models.User();
    }

    return this._otherUser
  },

  parse: function (response) {
    this.otherUser = response.other_user;
    this.teamSiteId = response.team_site_id;
    return response.messages;
  }


});
