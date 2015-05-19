Quack.Models.Message = Backbone.Model.extend(
  _.extend({}, Quack.Mixins.Starable, {
    urlRoot: "api/messages",

    starableOptions: {
      foreignKey: "starable_id"
    },

    toJSON: function() {
      var json = {message: _.clone(this.attributes)};

      if (this._file) {
        json.message.file = this._file;
      }

      return json;
    }
  })
)
