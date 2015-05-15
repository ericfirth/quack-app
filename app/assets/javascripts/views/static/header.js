Quack.Views.Header = Backbone.View.extend({
  initialize: function() {
    this.listenTo(Quack.currentUser, "sync", this.render)
  },

  tagName: "section",

  className: "header",

  template: JST["static/header"],

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})
