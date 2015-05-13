Quack.Views.Header = Backbone.View.extend({
  initialize: function() {
    this.listenTo(Quack.currentUser, "sync", this.render)
  },

  tagName: "section",

  className: "header",

  template: JST["static/header"],

  render: function() {
    var authToken = $('meta[name=csrf-token]').attr('content')
    var content = this.template({authToken: authToken});
    this.$el.html(content);
    return this;
  }
})
