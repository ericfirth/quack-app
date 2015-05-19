Quack.Views.StarredSidebarIndex = Backbone.CompositeView.extend({

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addStarredIndexItem)
  },

  tagName: "section",

  className: "starred-items",

  template: JST["stars/index"],

  events: {
    "click .starred-li": "goToPage"
  },

  render: function() {
    // debugger;
    var content = this.template({ collection: this.collection });
    this.$el.html(content);
    this.collection.each(this.addStarredIndexItem.bind(this))
    return this;
  },

  addStarredIndexItem: function(starredItem) {
    console.log(starredItem)
    var starredIndexItem = new Quack.Views.StarredSidebarIndexItem({ model: starredItem });
    this.addSubview(".starred-list", starredIndexItem);
  },

  goToPage: function (event) {
    var $target = $(event.target);
    var url = "#" + $target.data("type") + "/" + $target.data("id");
    $(".starred-li").removeClass("selected")
    $(".channel-li").removeClass("selected");
    $(".user-li").removeClass("selected");
    $target.addClass("selected");
    Backbone.history.navigate(url, { trigger: true });
  }

});
