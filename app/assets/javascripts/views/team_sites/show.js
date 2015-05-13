Quack.Views.TeamSiteShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render)
  },

  template: JST["team_sites/show"],

  render: function() {
    var content = this.template({
      teamSite: this.model,
      users: this.model.users(),
      channels: this.model.channels() })
    this.$el.html(content);
    return this;
  }

})
