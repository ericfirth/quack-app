Quack.Collections.TeamSites = Backbone.Collection.extend({
  url: "api/team_sites",

  model: Quack.Models.TeamSite,

  getOrFetch: function (id) {
    var teamSite = this.get(id);

    if (!teamSite) {
      teamSite = new Quack.Models.TeamSite({id: id});
      teamSite.fetch({
        success: function() {
          this.add(teamSite)
        }.bind(this)
      })
    } else {
      teamSite.fetch()
    }

    return teamSite;
  }
})
