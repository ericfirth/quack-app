Quack.Views.StarredSidebarIndexItem = Backbone.View.extend({
  tagName: 'li',

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  className: "starred-li",

  attributes: function() {
    return {
      'data-id': this.model.id,
      'data-type': this.model.get('star_type')
    }
  },

  template: JST["stars/index_item"],

  render: function() {
    // debugger;
    this.testSelected();
    var content = this.template({ model: this.model });
    this.$el.html(content);
    return this;
  },

  testSelected: function () {
    if (this.model.get("star_type") === "Channel") {
      if (window.location.hash === "#channels/" + this.model.id) {
        this.$el.addClass("selected")
      } else {
        this.$el.removeClass("selected")
      }
    } else {
      if (window.location.hash === "#conversations/" + this.model.id) {
        this.$el.addClass("selected")
      } else {
        this.$el.removeClass("selected")
      }
    }
  }
})
