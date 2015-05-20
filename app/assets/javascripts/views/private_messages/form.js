Quack.Views.PrivateMessageForm = Backbone.View.extend({

  tagName: 'form',

  className: "message-form",

  events: {
    "submit": "submit"
  },

  submit: function(event) {
    event.preventDefault();
    var text = this.$el.serializeJSON().private_message

    this.model.set(text);
    this.model.save({}, {
      success: function() {
        this.collection.add(this.model, { merge: true });
        this.remove();
      }.bind(this)
    })
  },

  template: JST["private_messages/form"],

  render: function () {
    // console.log("hello from the message form")
    var content = this.template({ message: this.model, conversation: this.collection});
    this.$el.html(content);
    return this;
  }
});
