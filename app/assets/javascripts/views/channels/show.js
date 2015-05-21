Quack.Views.ChannelShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.starableType = "Channel"
    this.messages = this.model.messages();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.messages, "sync", function() {
      this.render()
      this.listenTo(this.messages, "add", this.render)
    }.bind(this))
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
    var previousMessage = null;
    this.messages.each(function(message) {
      // debugger;
      if (!previousMessage || !message.compareDateTruthy(previousMessage)) {
        var $dateDivider = $("<div>").addClass("date").text(message.date().toDateString());
        this.$(".messages").append($dateDivider)
      }
      this.addMessageView(message);
      previousMessage = message
    }.bind(this))

    this.addNewMessageView();
    this.addStarChannelView();
    this.addSearchBarView();
    // this.messages.each(this.addMessageView.bind(this));
    this.ensureBottomAlignment();
    return this;
  },

  ensureBottomAlignment: function() {
    var $container = this.$(".main-conversation")
    var $messagesUl = this.$(".messages")
    if ($messagesUl.height() < $container.height()) {
      $messagesUl.addClass("bottom")
      console.log("test");
    } else {
      $messagesUl.removeClass("bottom")
      $container.scrollTop($container.prop("scrollHeight") - $container.height());
    }
  // $container.scrollTop($container.prop("scrollHeight") - $container.height());
  }
})

// myPanel.scrollTop(myPanel[0].scrollHeight - myPanel.height());
