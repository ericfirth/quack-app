Quack.Views.MessageForm = Backbone.View.extend({

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
        
      }
    })
  },

  template: JST["messages/form"],

  render: function () {
    var content = this.template({ message: this.model });
    this.$el.html(content);
    return this;
  }
});
