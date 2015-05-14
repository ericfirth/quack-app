Quack.Views.ChannelsIndexItem = Backbone.View.extend({
  tagName: 'li',

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  className: "channel-li",

  attributes: function() {
    return {
      'data-channel-id': this.model.id
    };
  },

  template: JST["channels/index_item"],

  render: function() {
    var content = this.template({ channel: this.model });
    this.$el.html(content);
    return this;
  }
})
