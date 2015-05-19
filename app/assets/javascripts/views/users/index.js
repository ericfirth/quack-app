Quack.Views.UsersIndex = Backbone.CompositeView.extend({
  initialize: function() {
    // this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addUserIndexItem);
    // this.collection.each(this.addUserIndexItem.bind(this));
  },

  tagName: "section",

  className: "users",

  template: JST["users/index"],

  events: {
    "click .user-li": "goToConversation"
  },

  addUserIndexItem: function(indexItem) {
    if (indexItem.id !== Quack.currentUser.id && !indexItem.attributes.starred) {
      var userIndexItemView = new Quack.Views.UsersIndexItem({ model: indexItem });
      this.addSubview('.users-list', userIndexItemView);
    }
  },

  goToConversation: function (event) {
    var $target = $(event.target);
    var url = "#conversations/" + $target.data("user-id");
    $(".channel-li").removeClass("selected");
    $(".user-li").removeClass("selected");
    $target.addClass("selected");
    Backbone.history.navigate(url, { trigger: true });
  },

  render: function() {
    // console.log("hello from user index")
    var content = this.template();
    this.$el.html(content);
    return this;
  }

});
