Quack.Models.CurrentUser = Backbone.Model.extend({
  url: "api/session",

  starredSidebarItems: function () {
    if (!this._starredSidebarItems) {
      this._starredSidebarItems = new Quack.Collections.StarredSidebarItems([], { user: this })
    }

    return this._starredSidebarItems;
  },

  starredMessages: function () {
    if (!this._starredMessages) {
      this._starredMessages = new Quack.Collections.StarredMessages([], { user: this })
    }

    return this._starredMessages;
  },

  parse: function (response) {
    if (response.starred_sidebar_items) {
      this.starredSidebarItems().set(response.starred_sidebar_items);
      delete response.starred_sidebar_items
    }

    if (response.starred_messages) {
      this.starredMessages().set(response.starred_messages)
      delete response.starred_messages
    }

    return response;
  }
})
