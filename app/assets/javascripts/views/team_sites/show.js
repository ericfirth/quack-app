Quack.Views.TeamSiteShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click .channel-li": "getChannel"
    // "click .user-li": "getUser"
  },

  template: JST["team_sites/show"],

  getChannel: function(event) {
    $target = $(event.target);
    var channel = this.model.channels().getOrFetch($target.data("channel-id"));
    var channelView = new Quack.Views.ChannelShow({ model: channel });
    this._swapContentView(channelView);
  },

  _swapContentView: function(view) {
    this._contentView && this._contentView.remove()
    this._contentView = view
    this.$('.conversation').html(view.render().$el)
  },


  render: function() {
    var content = this.template()
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

})
