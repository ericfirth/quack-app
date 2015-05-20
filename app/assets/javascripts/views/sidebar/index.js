Quack.Views.SidebarIndex = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.render);
  },

  tagName: "section",

  className: "sidebar-index",

  template: JST["sidebar/index"],

  events: {
    "click .user-li": "goToConversation",
    "click .channel-li": "goToChannel",
    "click .add-channel": "newChannel"
  },

  changeSidebarIndexItem: function(indexItem) {
    //remove starred class if its now not starred
    if (indexItem.get("_type") === "Channel") {
      $("[data-channel-id =" + indexItem.id + "]").toggleClass("starred")
    } else {
      $("[data-user-id =" + indexItem.id + "]").toggleClass("starred")
    }
    console.log("called")
  },

  addSidebarIndexItem: function(indexItem) {
    var indexItemView
    // Check and make the right kind of index item view
    if (indexItem.get("_type") === "Channel") {
      indexItemView = new Quack.Views.ChannelsIndexItem({ model: indexItem });
    } else if (indexItem.get("_type") === "User" &&  indexItem.get("original_id") !== Quack.currentUser.id) {
      indexItemView = new Quack.Views.UsersIndexItem({ model: indexItem });
    }

    // if its starred, give it the the starred class
    if (indexItem.get("starred")) {
      indexItemView.$el.addClass("starred")
    }

    this.addSubview(".starred-list", indexItemView)

    // Attach it to the right ul + the starred list
    if (indexItem.get("_type") === "User") {
      this.addSubview(".users-list", indexItemView)
    } else {
      this.addSubview(".channels-list", indexItemView)
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

  goToChannel: function (event) {
    var $target = $(event.target);
    var url = "#channels/" + $target.data("channel-id");
    $(".channel-li").removeClass("selected");
    $(".user-li").removeClass("selected");
    $target.addClass("selected");
    Backbone.history.navigate(url, { trigger: true });
  },

  newChannel: function (event) {
    $(".channel-li").removeClass("selected")
    $(".user-li").removeClass("selected")
    Backbone.history.navigate("channels/new", { trigger: true })
  },

  render: function() {
    console.log("called");
    var content = this.template({ collection: this.collection});
    this.$el.html(content);
    this.collection.each(this.addSidebarIndexItem.bind(this));
    return this;
  }

});