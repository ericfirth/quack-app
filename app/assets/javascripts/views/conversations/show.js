Quack.Views.ConversationShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    // this.listenTo(this.collection, "add", this.addMessageView)
    this.listenTo(this.collection, "add", this.addNewMessageView)
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

  render: function () {
    console.log("hello from the conversation show")
    var content = this.template({ conversation: this.collection });
    this.$el.html(content);
    this.collection.each(this.addMessageView.bind(this))
    this.addNewMessageView();
    return this;
  }
})
