Quack.Views.MessageShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  tagName: "li",

  className: "message-show group",

  template: JST["messages/show"],

  render: function() {
    // console.log("testing if I render more than once");
    var content = this.template({ message: this.model });
    this.$el.html(content);
    // debugger;
    return this;
  }
});
