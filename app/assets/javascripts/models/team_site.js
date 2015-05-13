Quack.Models.TeamSite = Backbone.Model.extend({
  urlRoot: "api/team_sites",

  users: function() {
    if (!this._users) {
      this._users = new Quack.Collections.Users([], { teamSite: this });
    }

    return this._users
  },

  parse: function(response) {
    if (response.users) {
      this.users().set(response.users);
      delete response.users
    }

    return response;
  }
});
