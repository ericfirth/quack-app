Quack.Views.ChannelsIndexItem = Backbone.View.extend({
  tagName: 'li',

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  className: "channel-li",

  attributes: function() {
    return {
      'data-channel-id': this.model.get("original_id")
    };
  },

  template: JST["sidebar/channel_index_item"],

  render: function() {
    var content = this.template({ channel: this.model });
    this.$el.html(content);
    this.testSelected();
    return this;
  },

  testSelected: function() {
    if (window.location.hash === "#channels/" + this.model.get("original_id")) {
      this.$el.addClass("selected")
    } else {
      this.$el.removeClass("selected")
    }
  }
})
