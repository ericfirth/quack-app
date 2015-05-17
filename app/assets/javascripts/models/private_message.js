Quack.Models.PrivateMessage = Backbone.Model.extend({
  urlRoot: "api/private_messages",

  toJSON: function() {
    var json = {private_message: _.clone(this.attributes)};

    if (this._file) {
      json.private_message.file = this._file;
    }

    return json;
  }
});
