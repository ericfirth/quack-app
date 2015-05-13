Quack.Views.TeamSiteShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.addUserIndex();
    this.addChannelIndex();
  },

  events: {
    "click .channel-li": "getChannel"
    // "click .user-li": "getUser"
  },

  template: JST["team_sites/show"],

  getChannel: function(event) {
    $target = $(event.target);

  },

  

  addChannelIndex: function() {
    var channelIndex = new Quack.Views.ChannelsIndex({ collection: this.model.channels() })
    this.addSubview(".sidebar", channelIndex);
  },

  addUserIndex: function() {
    var userIndex = new Quack.Views.UsersIndex({ collection: this.model.users() })
    this.addSubview(".sidebar", userIndex);
  },

  render: function() {
    var content = this.template()
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

})
