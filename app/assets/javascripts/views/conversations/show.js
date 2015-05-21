Quack.Views.ConversationShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.starableType = "User";
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(this.collection, "add", this.addNewMessageView);
  },

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
    var content = this.template({ conversation: this.collection });
    this.$el.html(content);
    this.collection.each(this.addMessageView.bind(this))
    this.addSearchBarView();
    this.addNewMessageView();
    this.addStarConversationView();
    return this;
  }
})
