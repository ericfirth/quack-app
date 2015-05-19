Quack.Views.MessageForm = Backbone.View.extend({

  initialize: function(options) {
    this.privateMessage = options.privateMessage
  },

  tagName: 'form',

  className: "message-form",

  events: {
    "submit": "submit",
    "change .file-attachment": "fileInputChange"
  },

  fileInputChange: function(event){
    var that = this;
    var file = event.currentTarget.files[0];
    this.model.set("file_file_name", file.name)
    var reader = new FileReader();

    reader.onloadend = function(){
      that.model._file = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      delete that.model._file;
    }
  },

  submit: function(event) {
    event.preventDefault();
    var text = this.$el.serializeJSON().message


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
    var content = this.template({
      message: this.model,
      channel: this.collection
    });
    this.$el.html(content);
    return this;
  }
});
