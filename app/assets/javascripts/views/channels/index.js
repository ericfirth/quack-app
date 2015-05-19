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
    if (!indexItem.attributes.starred) {
      var indexItemView = new Quack.Views.ChannelsIndexItem({ model: indexItem });
      this.addSubview(".channel-list", indexItemView);
    }
  },

  events: {
    "click .channel-li": "goToChannel",
    "click .add-channel": "newChannel"
  },

  goToChannel: function (event) {
    var $target = $(event.target);
    var url = "#channels/" + $target.data("channel-id");
    $(".channel-li").removeClass("selected");
    $(".user-li").removeClass("selected");
    $target.addClass("selected");
    Backbone.history.navigate(url, { trigger: true });
  },

  newChannel: function (event) {
    $(".channel-li").removeClass("selected")
    $(".user-li").removeClass("selected")
    Backbone.history.navigate("channels/new", { trigger: true })
  },

  render: function() {
    var content = this.template()
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

});
