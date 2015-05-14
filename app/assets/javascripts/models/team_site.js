Quack.Models.TeamSite = Backbone.Model.extend({
  urlRoot: "api/team_sites",

  users: function() {
    if (!this._users) {
      this._users = new Quack.Collections.Users([], { teamSite: this });
    }

    return this._users;
  },

  channels: function() {
    if (!this._channels) {
      this._channels = new Quack.Collections.Channels([], { teamSite: this })
    }

    return this._channels;
  },
  // 
  // conversations: function() {
  //   if (!this._conversations) {
  //     this._conversations = new Quack.Collections.Conversation([], { teamSite: this })
  //   }
  //
  //   return this._conversations;
  // },

  parse: function(response) {
    if (response.users) {
      this.users().set(response.users);
      delete response.users;
    }

    if (response.channels) {
      this.channels().set(response.channels);
      delete response.channels;
    }

    if (response.conversations) {
      this.conversations().set(response.conversations);
      delete response.conversations
    }

    return response;
  }
});
