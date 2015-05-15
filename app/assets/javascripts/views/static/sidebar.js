Quack.Views.Sidebar = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
    this.addChannelIndex();
    this.addUserIndex();
  },

  className: "sidebar-composite",

  template: JST["static/sidebar"],

  render: function () {
    var authToken = $('meta[name=csrf-token]').attr('content')
    var content = this.template({ team: this.model, authToken: authToken });
    this.$el.html(content)
    this.attachSubviews();
    return this;
  },

  addChannelIndex: function () {
    var channelIndex = new Quack.Views.ChannelsIndex({ collection: this.model.channels() })
    this.addSubview(".users-channels", channelIndex);
  },

  addUserIndex: function () {
    var userIndex = new Quack.Views.UsersIndex({ collection: this.model.users() })
    this.addSubview(".users-channels", userIndex);
  },

});
