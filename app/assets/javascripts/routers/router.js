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
    "channels/new": "channelNew",
    "channels/:id": "channelShow",
    "conversations/:id": "conversationShow"
    // "team_sites/:id": "showTeamSite"
  },

  indexTeamSites: function() {
    this._sidebarView && this._sidebarView.remove()
    var indexView = new Quack.Views.TeamSitesIndex({
      collection: this.teamSites
    });
    this._swapView(indexView);
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
        }.bind(this)}
      )
    } else {
      var channel = this.teamSite.channels().getOrFetch(id);
    }
    var channelShowView = new Quack.Views.ChannelShow({ model: channel });
    this._swapView(channelShowView);
  },

  channelNew: function () {
    var newChannel = new Quack.Models.Channel();
    var newChannelView = new Quack.Views.ChannelForm({
      model: newChannel,
      collection: this.teamSite.channels() })
    this._swapView(newChannelView);
  },

  conversationShow: function(otherUserId) {
    if (!this.teamSite) {
      var conversation = new Quack.Collections.Conversation([], {otherUserId: otherUserId})
      conversation.fetch({
        success: function() {
          this.teamSite = this.teamSites.getOrFetch(conversation.teamSiteId);
          this.sidebarStart();
        }.bind(this)
      })
    } else {
      var conversation = new Quack.Collections.Conversation([], {otherUserId: otherUserId})
      conversation.fetch()
    }
    var conversationShowView = new Quack.Views.ConversationShow({ collection: conversation });
    this._swapView(conversationShowView);


  },

  // showTeamSite: function(id) {
  //   var teamSite = this.teamSites.getOrFetch(id);
  //   var showView = new Quack.Views.TeamSiteShow({
  //     model: teamSite
  //   })
  //   this._swapView(showView)
  // },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$conversation.html(view.render().$el);
  },

  headerStart: function() {
    var headerView = new Quack.Views.Header();
    this.$header.html(headerView.render().$el);
  },

  sidebarStart: function() {
    this._sidebarView = new Quack.Views.Sidebar({model: this.teamSite});
    this.$sidebar.html(this._sidebarView.render().$el)
  }
})
