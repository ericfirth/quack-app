Quack.Views.StarForm = Backbone.View.extend({
  initialize: function (options) {
    this.starableType = options.starableType;
    this.listenTo(this.model, "sync", this.render);
  },

  template: JST["stars/form"],

  events: {
    "click": "toggleStar"
  },

  toggleStar: function(event) {
    event.preventDefault();
    this.model.toggleStar(this.starableType);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
