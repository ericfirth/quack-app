Quack.Views.ChannelShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.messages = this.model.messages();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.messages, "add", this.addMessageView);
    this.messages.each(this.addMessageView.bind(this));
  },

  template: JST["channels/show"],

  addMessageView: function(message) {
    var messageView = new Quack.Views.MessageShow({ model: message });
    this.addSubview(".messages", messageView);
  },

  render: function () {
    var content = this.template({ channel: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
})
