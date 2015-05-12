Quack.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.$header = options.$header;
    this.$footer = options.$footer;
    this.currentUser = options.currentUser;

    this.teamSites = new Quack.Collections.TeamSites();
    this.teamSites.fetch();

    // this.headerStart();
  },

  routes: {
    "" : "index",

  },

  index: function() {
    var indexView = new Quack.Views.TeamSitesIndex({
      collection: this.teamSites,
      currentUser: this.currentUser
    });
    this._swapView(indexView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
