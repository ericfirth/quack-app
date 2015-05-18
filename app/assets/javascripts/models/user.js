Quack.Models.User = Backbone.Model.extend(
  _.extend({}, Quack.Mixins.Starable, {
    urlRoot: "api/users",

    toJSON: function() {
      var json = {user: _.clone(this.attributes)};

      if (this._avatar) {
        json.user.avatar = this._avatar;
      }

      return json;
    }
  })
)
