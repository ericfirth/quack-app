Quack.Views.ChannelsIndex = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addChannelIndexItem);
    this.collection.each(this.addChannelIndexItem.bind(this));
  },

  tagName: "section",

  className: "channels",

  template: JST["channels/index"],

  addChannelIndexItem: function(indexItem) {
    var indexItemView = new Quack.Views.ChannelsIndexItem({ model: indexItem })
    this.addSubview(".channel-list", indexItemView);
  },

  render: function() {
    var content = this.template()
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

});
