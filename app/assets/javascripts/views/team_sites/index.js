Quack.Views.TeamSitesIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, "sync add remove change:name", this.render);
  },

  events: {
    "change .team-select": "goToTeam"
  },

  template: JST["team_sites/index"],

  goToTeam: function(event) {
    var $target = $(event.target);
    var url = "/team_sites/" + $target.val();
    Backbone.history.navigate(url, { trigger: true })
  },

  render: function () {
    var authToken = $('meta[name=csrf-token]').attr('content')
    var content = this.template({
      teamSites: this.collection,
      authToken: authToken
    });
    // debugger;
    this.$el.html(content);
    return this;
  }

})
