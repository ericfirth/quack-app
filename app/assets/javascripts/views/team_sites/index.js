Quack.Views.TeamSitesIndex = Backbone.View.extend({
  initialize: function (options) {
    this.currentUser = options.currentUser
    this.listenTo(this.collection, "sync add remove change:name", this.render);
  },

  template: JST["team_sites/index"],

  render: function () {
    var content = this.template({
      teamSites: this.collection,
      user: this.currentUser
    });
    this.$el.html(content);
    return this;
  }

})
