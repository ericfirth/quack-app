Quack.Views.ConversationShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.starableType = "User";
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(this.collection, "sync", function() {
      this.render()
      this.listenTo(this.collection, "add", this.render)
    }.bind(this))
    this.listenTo(this.collection, "add", this.addNewMessageView)
    // this.listenTo(this.collection, "add", this.addNewMessageView);
  },

  className: "transitioning",

  template: JST["conversations/show"],

  addMessageView: function(message) {
    var messageView = new Quack.Views.MessageShow({ model: message });
    this.addSubview(".messages", messageView);
  },

  addNewMessageView: function() {
    var newMessage = new Quack.Models.PrivateMessage();
    var messageForm = new Quack.Views.PrivateMessageForm({ model: newMessage, collection: this.collection });
    this.addSubview(".message-add", messageForm);
  },

  addStarConversationView: function () {
    var starForm = new Quack.Views.StarForm({ model: this.model, starableType: this.starableType })
    this.addSubview(".star", starForm);
  },

  addSearchBarView: function () {
    var searchShow = new Quack.Views.SearchBar();
    this.addSubview(".search-header", searchShow)
  },

  render: function () {
    var content = this.template({ otherUser: this.model, conversation: this.collection });
    this.checkForSearch();
    this.$el.html(content);
    var previousMessage = null;
    this.collection.each(function(message) {
      if (!previousMessage || !message.compareDateTruthy(previousMessage)) {
        var $dateDivider = $("<li>").addClass("date").text(message.date().toDateString());
        this.$(".messages").append($dateDivider)
        this.addMessageView(message);
        previousMessage = message
      }
    }.bind(this))

    this.addSearchBarView();
    this.addNewMessageView();
    this.addStarConversationView();
    this.ensureBottomAlignment();
    // debugger;
    return this;
  },

  checkForSearch: function () {
    $searchArea = $("#search")
    if ($searchArea.hasClass("visible")) {
      $(".main-conversation").addClass("search-on")
      $(".footer").addClass("search-on")
    }
  },


  ensureBottomAlignment: function() {
    var $container = this.$(".main-conversation")
    var $messagesUl = this.$(".messages")
    if ($messagesUl.height() <= $container.height()) {
      $messagesUl.addClass("bottom")
    } else {
      $messagesUl.removeClass("bottom")
      $container.scrollTop($container.prop("scrollHeight") - $container.height());
    }
  // $container.scrollTop($container.prop("scrollHeight") - $container.height());
  }
})
