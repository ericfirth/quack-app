Quack.Views.ChannelShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.messages = this.model.messages();
    this.listenTo(this.model, "sync", this.render);
  },

  template: JST["channels/show"],

  addMessageView: function(message) {
    var messageView = new Quack.Views.MessageShow({ model: message });
    this.addSubview(".messages", messageView);
  },

  render: function () {
    var content = this.template({ channel: this.model });
    this.$el.html(content);

    var newMessage = new Quack.Models.Message();
    var messageForm = new Quack.Views.MessageForm({ model: newMessage })
    this.$el.append(messageForm.render().$el)
    this.messages.each(this.addMessageView.bind(this));
    return this;
  }
})
