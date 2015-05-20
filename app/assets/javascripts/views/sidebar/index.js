Quack.Views.SidebarIndex = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add change:starred", this.changeSidebar);


  },

  tagName: "section",

  className: "sidebar-index",

  template: JST["sidebar/index"],

  events: {
    "click .user-li": "goToConversation",
    "click .channel-li": "goToChannel",
    "click .add-channel": "newChannel"
  },

  changeSidebar: function(indexItem) {
    // debugger;
    //remove starred class if its now not starred
    if (indexItem.get("_type") === "Channel") {
      $("[data-channel-id =" + indexItem.id + "]").toggleClass("starred")
    } else {
      $("[data-user-id =" + indexItem.id + "]").toggleClass("starred")
    }
    this.ensureStarredHeader();


  },

  ensureStarredHeader: function() {
    if (this.collection.numStars() > 0) {
      this.$(".starred-header").removeClass("invisible")
    } else {
      this.$(".starred-header").addClass("invisible")
    }
  },

  ensureSelected: function() {
    $(".users-li").removeClass("selected")
    $(".channels-li").removeClass("selected")

  },

  addSidebarIndexItem: function(indexItem) {
    var indexItemView1, indexItemView2
    // Check and make the right kind of index item view
    if (indexItem.get("_type") === "Channel") {
      indexItemView1 = new Quack.Views.ChannelsIndexItem({ model: indexItem });
      indexItemView2 = new Quack.Views.ChannelsIndexItem({ model: indexItem });
    } else if (indexItem.get("_type") === "User" &&  indexItem.get("original_id") !== Quack.currentUser.id) {
      indexItemView1 = new Quack.Views.UsersIndexItem({ model: indexItem });
      indexItemView2 = new Quack.Views.UsersIndexItem({ model: indexItem });
    }

    // if its starred, give it the the starred class
    if (indexItem.get("starred")) {
      indexItemView1.$el.addClass("starred");
      indexItemView2.$el.addClass("starred");
    }
    // debugger;
    // Attach it to the right ul + the starred list
    if (indexItem.get("_type") === "User") {
      this.addSubview(".users-list", indexItemView1);
    } else {
      this.addSubview(".channels-list", indexItemView1);
    }

    this.addSubview(".starred-list", indexItemView2);
  },

  goToConversation: function (event) {
    var $target = $(event.target);
    var url = "#conversations/" + $target.data("userId");
    this.$("li").removeClass("selected");
    Backbone.history.navigate(url, { trigger: true });
    $("[data-user-id=" + $target.data("userId") + "]").addClass("selected")
    $target.addClass("selected");
  },

  goToChannel: function (event) {
    var $target = $(event.target);
    var url = "#channels/" + $target.data("channelId");
    this.$("li").removeClass("selected");
    $("[data-channel-id=" + $target.data("channelId") + "]").addClass("selected")
    // debugger;
    Backbone.history.navigate(url, { trigger: true });
  },

  newChannel: function (event) {
    $(".channel-li").removeClass("selected")
    $(".user-li").removeClass("selected")
    Backbone.history.navigate("channels/new", { trigger: true })
  },

  render: function() {

    var content = this.template({ collection: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    this.collection.each(this.addSidebarIndexItem.bind(this));
    this.ensureStarredHeader();

    return this;
  }

});
