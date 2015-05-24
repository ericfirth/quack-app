Quack.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.$sidebar = this.$rootEl.find('.sidebar')
    this.$conversation = this.$rootEl.find('.conversation')
    this.$header = options.$header;
    this.$footer = options.$footer;

    this.teamSites = new Quack.Collections.TeamSites();
    this.teamSites.fetch();

    // this.headerStart();

  },

  routes: {
    "" : "indexTeamSites",
    "team_sites/new": "newTeamSite",
    "channels/:id": "channelShow",
    "conversations/:id": "conversationShow"
  },

  indexTeamSites: function() {
    this._sidebarView && this._sidebarView.remove()
    $(".sidebar").addClass("hidden");
    var indexView = new Quack.Views.TeamSitesIndex({
      collection: this.teamSites
    });
    var $modal = $(".modal");
    $modal.html(indexView.render().$el);
    $modal.addClass("is-open")
  },

  newTeamSite: function () {
    this._sidebarView && this._sidebarView.remove()
    var newTeamSite = new Quack.Models.TeamSite();
    var newView = new Quack.Views.TeamSiteForm({
      model: newTeamSite,
      collection: this.teamSites
    });
    this._swapView(newView);
  },

  channelShow: function(id) {
    if (!this.teamSite) {
      var channel = new Quack.Models.Channel({id: id})
      channel.fetch({
        success: function() {
          this.teamSite = this.teamSites.getOrFetch(channel.get("team_site_id"));
          this.sidebarStart();
          var channelShowView = new Quack.Views.ChannelShow({ model: channel });
          this._swapView(channelShowView);
        }.bind(this)})
    } else {
      var channel = this.teamSite.channels().getOrFetch(id);
      this.sidebarStart();
      var channelShowView = new Quack.Views.ChannelShow({ model: channel });

      this._swapView(channelShowView);
    }
  },

  channelNew: function () {
    var newChannel = new Quack.Models.Channel();
    var newChannelView = new Quack.Views.ChannelForm({
      model: newChannel,
      collection: this.teamSite.channels() })
    this._swapView(newChannelView);
  },

  conversationShow: function(otherUserId) {
    var conversation, otherUser
    conversation = new Quack.Collections.Conversation([], {otherUserId: otherUserId})
    if (!this.teamSite) {
      conversation.fetch({
        success: function () {
          this.teamSite = this.teamSites.getOrFetch(conversation.teamSiteId);
          otherUser = this.teamSite.users().getOrFetch(otherUserId)
          this.sidebarStart();
          var conversationShowView = new Quack.Views.ConversationShow({
                                    model: otherUser,
                                    collection: conversation });
          this._swapView(conversationShowView);
        }.bind(this)
      })
    } else {
      conversation.fetch()
      otherUser = this.teamSite.users().getOrFetch(otherUserId)
      this.sidebarStart();
      var conversationShowView = new Quack.Views.ConversationShow({ model: otherUser, collection: conversation });
      this._swapView(conversationShowView);
    }
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$conversation.html(view.render().$el);
  },

  editSelf: function (id) {

  },

  sidebarStart: function() {
    if (!this._sidebarView) {
      this._sidebarView = new Quack.Views.Sidebar({model: this.teamSite});
      this.$sidebar.html(this._sidebarView.render().$el);
    }
  }


})
