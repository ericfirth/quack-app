Quack.Models.Conversation = Backbone.Model.extend(
  _.extend({}, Quack.Mixins.Starable, {
      urlRoot: "api/conversations",

    starableOptions: {
      foreignKey: "starable_id"
    }
  })
)
