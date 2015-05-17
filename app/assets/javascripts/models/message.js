Quack.Models.Message = Backbone.Model.extend({
  urlRoot: "api/messages",

  toJSON: function() {
    var json = {message: _.clone(this.attributes)};

    if (this._file) {
      json.message.file = this._file;
    }

    return json;
  }
});
