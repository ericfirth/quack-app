Quack.Views.Sidebar = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render)
    this.addUserIndex();
    this.addChannelIndex();
  },

  template: JST["static/sidebar"],

  render: function() {
    var content = this.template();
    this.$el.html(content)
    this.attachSubviews();
    return this;
  },

  addChannelIndex: function() {
    var channelIndex = new Quack.Views.ChannelsIndex({ collection: this.model.channels() })
    this.addSubview(".users-channels", channelIndex);
  },

  addUserIndex: function() {
    var userIndex = new Quack.Views.UsersIndex({ collection: this.model.users() })
    this.addSubview(".users-channels", userIndex);
  },

});
