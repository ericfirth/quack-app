Quack.Models.User = Backbone.Model.extend(
  _.extend({}, Quack.Mixins.Starable, {
    urlRoot: "api/users",

    starableOptions: {
      foreignKey: "starable_id"
    },

    toJSON: function() {
      var json = {user: _.clone(this.attributes)};

      if (this._avatar) {
        json.user.avatar = this._avatar;
      }

      return json;
    },

    parse: function(response) {
      if (response.star_id) {
        this.star().set("id", response.star_id)
        delete response.star_id
      }
      return response
    }
  })
)
