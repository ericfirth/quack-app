Quack.Views.MessageShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    console.log("hi")
  },

  tagName: "li",

  className: "message-show",

  template: JST["messages/show"],

  render: function() {
    var content = this.template({ message: this.model });
    this.$el.html(content);
    return this;
  }
});
