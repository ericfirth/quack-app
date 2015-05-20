Quack.Models.CurrentUser = Backbone.Model.extend({
  url: "api/session",

  sidebarItems: function() {
    if (!this._sidebarItems) {
      this._sidebarItems = new Quack.Collections.SidebarItems([], { user: this })
    }
    return this._sidebarItems
  },

  // otherUsers: function () {
  //   if (!this._otherUsers) {
  //     this._otherUsers = new Quack.Collections.Users([], { user: this })
  //   }
  //
  //   return this._otherUsers
  // }

  parse: function (response) {
    this.sidebarItems().reset(null);

    if (response.channels) {
      this.sidebarItems().add(response.channels)
      console.log(this.sidebarItems().length)
      delete response.channels
    }

    if (response.users) {
      this.sidebarItems().add(response.users);
      console.log(this.sidebarItems().length)
      delete response.users
    }

    return response;
  }
})
