Quack.Views.UsersIndexItem = Backbone.View.extend({
  tagName: 'li',

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  className: "user-li",

  attributes: function() {
    return {
      'data-user-id': this.model.get("original_id")
    };
  },

  template: JST["sidebar/user_index_item"],

  render: function() {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    this.testSelected();
    // this.$el.data("id", this.model.get("id"));

    return this;
  },
  testSelected: function() {
    if (window.location.hash === "#conversations/" + this.model.get("original_id")) {
      this.$el.addClass("selected")
    } else {
      this.$el.removeClass("selected")
    }
  }
})
