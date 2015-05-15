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
    if ($target.val() === "new") {
      Backbone.history.navigate("team_sites/new", { trigger: true });
    } else {
      var teamSite = new Quack.Models.TeamSite({id: $target.val()})
      teamSite.fetch({
        success: function() {
          var channelId = teamSite.get("channel_to_display")
          var url = "channels/" + channelId
          Backbone.history.navigate(url, { trigger: true })
        }
      })
    }
  },

  render: function () {
    var authToken = $('meta[name=csrf-token]').attr('content')
    var content = this.template({
      teamSites: this.collection,
      authToken: authToken
    });
    this.$el.html(content);
    return this;
  }

})
