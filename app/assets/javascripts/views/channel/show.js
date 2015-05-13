Quack.Views.ChannelShow = Backbone.CompositeView.extend({
  initalize: function() {

  },
  template: JST["channels/show"],

  render: function () {
    var content = this.template({ channel: this.model });
    this.$el.html(content);
    return this;
  }
})
