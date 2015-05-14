Quack.Views.MessageForm = Backbone.View.extend({

  initialize: function(options) {
    this.pm = options.pm
  },

  tagName: 'form',

  className: "message-form",

  events: {
    "submit": "submit"
  },

  submit: function(event) {
    event.preventDefault();
    var text = this.$el.serializeJSON()

    this.model.set(text);
    this.model.save({}, {
      success: function() {
        this.collection.messages().add(this.model, { merge: true });
        this.remove();
      }.bind(this)
    })
  },

  template: JST["messages/form"],

  render: function () {
    var content = this.template({ message: this.model, channel: this.collection, pm: this.pm });
    this.$el.html(content);
    return this;
  }
});
