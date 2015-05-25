Quack.Views.ChannelForm = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  className: 'create-channel-form',

  events: {
    "submit": "submit",
    "click .js-modal-close": "closeModal"
  },

  template: JST["channels/form"],

  render: function () {
    var content = this.template({ channel: this.model });
    this.$el.html(content);
    return this;
  },

  closeModal: function() {
    $(".modal").removeClass("is-open");
    this.remove()
  },

  setChannelAttrs: function(channel) {
    var id = channel.id
    channel.set("original_id", id);
    channel.set("_type", "Channel");
    channel.set("id", "channel" + id);
    channel.set("starred", false)
  },

  addChannelToSidebar: function(channel) {
    var channelSidebarIndexView = new Quack.Views.ChannelsIndexItem({ model: channel })
    var channelStarredSidebarIndexView = new Quack.Views.ChannelsIndexItem({ model: channel })
    $(".channels-list").append(channelSidebarIndexView.render().$el).addClass("selected");
    $(".starred-list").append(channelStarredSidebarIndexView.render().$el).addClass("selected");
  },

  submit: function (event) {
    event.preventDefault();
    var name = $(event.target).serializeJSON().channel;
    this.model.set(name);
    this.model.save({}, {
      success: function () {
        this.collection.add(this.model);
        var url = "channels/" + this.model.id;
        this.setChannelAttrs(this.model);
        this.addChannelToSidebar(this.model)
        // Quack.currentUser.sidebarItems().add(this.model)
        this.closeModal();
        Backbone.history.navigate(url, { trigger: true });
      }.bind(this)
    })
  }
});
