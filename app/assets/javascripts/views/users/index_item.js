Quack.Views.UsersIndexItem = Backbone.View.extend({
  tagName: 'li',

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  className: "user-li",

  attributes: function() {
    return {
      'data-user-id': this.model.id
    };
  },

  template: JST["users/index_item"],

  render: function() {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    // this.$el.data("id", this.model.get("id"));

    return this;
  }
})