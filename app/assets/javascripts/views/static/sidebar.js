Quack.Views.Sidebar = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(Quack.currentUser, "sync", this.render)
    this.addStarredIndex();
    this.addChannelIndex();
    this.addUserIndex();
    $(window).on("click", this.closeMenu)
  },

  className: "sidebar-composite",

  template: JST["static/sidebar"],

  events: {
    "click .edit-avatar-link": "addEditAvatarView",
    "click .team-menu-icon": "toggleMenu"
  },

  render: function () {
    var authToken = $('meta[name=csrf-token]').attr('content')
    var content = this.template({ team: this.model, authToken: authToken });
    this.$el.html(content)
    this.attachSubviews();
    return this;
  },

  closeMenu: function(event) {
    // debugger;
    if (event.target.className === "icon-menu team-menu-icon" ||
    event.targetClass === "team-menu") {
      return
    }
    this.$(".team-menu").addClass("closed")
  },

  toggleMenu: function (event) {
    this.$(".team-menu").toggleClass("closed")
  },

  addEditAvatarView: function (event) {
    var user = this.model.users().get(Quack.currentUser.id)
    var editUserView = new Quack.Views.UserForm({ model: user, collection: this.model.users() });
    var $modal = $(".modal");
    $modal.html(editUserView.render().$el);
    $modal.addClass("is-open")
  },

  addStarredIndex: function() {
    var starredIndex = new Quack.Views.StarredSidebarIndex({ collection: Quack.currentUser.starredSidebarItems() })
    this.addSubview(".users-channels", starredIndex);
  },

  addChannelIndex: function () {
    var channelIndex = new Quack.Views.ChannelsIndex({ collection: this.model.channels() })
    this.addSubview(".users-channels", channelIndex);
  },

  addUserIndex: function () {
    var userIndex = new Quack.Views.UsersIndex({ collection: this.model.users() })
    this.addSubview(".users-channels", userIndex);
  },

});
