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
    this.testSelected();
    var content = this.template({ user: this.model, selected: this.selected });
    this.$el.html(content);
    // this.$el.data("id", this.model.get("id"));

    return this;
  },

  testSelected: function () {
    if (window.location.hash === "#conversations/" + this.model.id) {
      this.$el.addClass("selected")

    } else {
      this.$el.removeClass("selected")
    }
  }
})
