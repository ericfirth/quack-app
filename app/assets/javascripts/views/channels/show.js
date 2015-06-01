Quack.Views.ChannelShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.starableType = "Channel"
    this.messages = this.model.messages();
    this._page = 1;
    this.preloadData(this._page);
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.messages, "sync", this.render);

    this.listenTo(this.messages, "add", this.addMessageView);

    var channel = window.pusher.subscribe('messages');
    channel.bind('new_message', function(data) {
      var message = new Quack.Models.Message(data);
      message.typed = true;
      if (data.sender !== Quack.currentUser.get("username")) {
        this.messages.add(message);
      }
    }.bind(this))

  },

  template: JST["channels/show"],

  className: "channel-show",

  scrollListen: function() {
    this.$(".main-conversation").scroll(this.loadNextPage.bind(this));
  },

  loadNextPage: function (event) {
    var $container = this.$(".main-conversation")
    if ($container.scrollTop() < 100 && !this.flagged) {
      if (this.messages.total_pages > this._page) {
        this.preloadScrollHeight = $container.prop("scrollHeight");
        this.preloadScrollTop = $container.scrollTop();
        this._page++
        this.loadData(this._page);
        this.flagged = true
        // console.log("hit this");
      } else {
        this.$(".before-channel").removeClass("hidden")
      }
    }
  },

  addMessageView: function(message) {
    $("#first-message").addClass("hidden")
    var messageView = new Quack.Views.MessageShow({ model: message });
    if (message.typed) {
      this.addSubview(".messages", messageView);
    } else {
      this.addSubview(".messages", messageView, true);
    }
  },

  addNewMessageView: function() {
    var newMessage = new Quack.Models.Message();
    var messageForm = new Quack.Views.MessageForm({ model: newMessage,
                                      collection: this.model })
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

  buildMessagesWithDividers: function() {
    var previousMessage = null;
    this.messages.each(function(message, index) {
      // first check if the date of the current messageis different from the last
      // & if so put the last ones date before you
      if (previousMessage && !message.isOnSameDateAs(previousMessage)) {
          var $dateDivider = $("<li>").addClass("date").text(previousMessage.date().toDateString());
          this.$(".messages").prepend($dateDivider)
        }
      this.addMessageView(message);
      // then check if the current message is the top of the list or the the first message
      if (index + 1 === this.messages.total_messages) {
        var $dateDivider = $("<li>").addClass("date").text(message.date().toDateString());
        this.$(".messages").prepend($dateDivider)
      }
      previousMessage = message
    }.bind(this))
  },


  render: function () {
    var content = this.template({ channel: this.model});
    this.$el.html(content);
    this.checkForSearch();
    if (!this.flagged) {
      this.$(".messages").addClass("bottom")
    }
    // build the page with date dividers
    this.buildMessagesWithDividers();

    //add subviews
    this.addNewMessageView();
    this.addStarChannelView();
    this.addSearchBarView();

    //add bottom alignment and the scroll listener
    this.scrollListen();

    if (!this.flagged) {
      this.ensureBottomAlignment();
    } else {
      var $container = this.$(".main-conversation")
      $container.scrollTop($container.prop("scrollHeight") - this.preloadScrollHeight + this.preloadScrollTop)
    }
    this.flagged = false
    if (this.subviews(".messages").size() === 0) {
      $("#first-message").removeClass("hidden")
    }

    return this;
  },

  ensureBottomAlignment: function() {
    var $container = this.$(".main-conversation")
    var $messagesUl = this.$(".messages")
    if ($messagesUl.height() <= $container.height()) {
      $messagesUl.addClass("bottom").removeClass("hidden")
    } else {
      $messagesUl.removeClass("bottom hidden")
      $container.scrollTop($container.prop("scrollHeight") - $container.height());
    }
  },

  loadData: function(pageNum, preloadScrollHeight, preloadScrollTop) {
    this.messages.fetch({
      remove: false,
      data: { page: pageNum,
      id: this.model.id}
    });
  },

  preloadData: function(pageNum) {
    this.messages.fetch({
      data: { page: pageNum,
      id: this.model.id}
    });
  },

  checkForSearch: function () {
    $searchArea = $("#search")
    if ($searchArea.hasClass("visible")) {
      $(".main-conversation").addClass("search-on")
      $(".footer").addClass("search-on")
    }
  }
})

// myPanel.scrollTop(myPanel[0].scrollHeight - myPanel.height());
