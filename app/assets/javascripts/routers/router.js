Quack.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.$header = options.$header;
    this.$footer = options.$footer;

    this.teamSites = new Quack.Collections.TeamSites();
    this.teamSites.fetch();

    // this.headerStart();
  },

  routes: {
    "" : "indexTeamSites",
    "team_sites/new": "newTeamSite",
    "team_sites/:id": "showTeamSite"
  },

  indexTeamSites: function() {
    var indexView = new Quack.Views.TeamSitesIndex({
      collection: this.teamSites
    });
    this._swapView(indexView);
  },

  newTeamSite: function () {
    var newTeamSite = new Quack.Models.TeamSite();
    var newView = new Quack.Views.TeamSiteForm({
      model: newTeamSite,
      collection: this.teamSites
    });
    this._swapView(newView);
  },

  showTeamSite: function(id) {
    var teamSite = this.teamSites.getOrFetch(id);
    var showView = new Quack.Views.TeamSiteShow({
      model: teamSite
    })
    this._swapView(showView)
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
