Quack.Views.ChannelShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.starableType = "Channel"
    this.messages = this.model.messages();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.messages, "add", this.addMessageView)
    this.listenTo(this.messages, "add", this.addNewMessageView)
  },

  template: JST["channels/show"],

  className: "channel-show",

  addMessageView: function(message) {
    var messageView = new Quack.Views.MessageShow({ model: message });
    this.addSubview(".messages", messageView);
  },

  addNewMessageView: function() {
    var newMessage = new Quack.Models.Message();
    var messageForm = new Quack.Views.MessageForm({ model: newMessage, collection: this.model })
    this.addSubview(".message-add", messageForm);

  },

  addStarChannelView: function () {
    var starForm = new Quack.Views.StarForm({ model: this.model, starableType: this.starableType })
    this.addSubview(".star", starForm);
  },

  addSearchBarView: function () {
    var searchShow = new Quack.Views.SearchBar();
    this.addSubview(".search-header", searchShow)
  },

  render: function () {
    // console.log("hello from the channel show")

    var content = this.template({ channel: this.model });
    this.$el.html(content);
    this.addNewMessageView();
    this.addStarChannelView();
    this.addSearchBarView();
    this.messages.each(this.addMessageView.bind(this));
    return this;
  }
})
