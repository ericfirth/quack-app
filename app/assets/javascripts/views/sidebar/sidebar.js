Quack.Views.Sidebar = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(Quack.currentUser.sidebarItems(), "sync", this.render)
    this.addIndex();

    $(window).on("click", this.closeAvatarMenu)
  },

  className: "sidebar-composite",

  template: JST["sidebar/show"],

  events: {
    "click .edit-avatar-link": "addEditAvatarView",
    "click .team-menu-icon": "toggleMenu",
    "click .invite": "addInviteView"
  },


  addInviteView: function (event) {
    var invite = new Quack.Models.Invite();
    var inviteView = new Quack.Views.InviteForm({ model: invite, team: this.model });
    var $modal = $(".modal");
    $modal.html(inviteView.render().$el);
    $modal.addClass("is-open")
  },

  render: function () {
    var authToken = $('meta[name=csrf-token]').attr('content')
    var content = this.template({ team: this.model, authToken: authToken });
    this.$el.html(content)
    this.attachSubviews();
    return this;
  },

  closeAvatarMenu: function(event) {
    if (event.target.className === "icon-menu team-menu-icon" ||
    event.target.className === "invite") {
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

  addIndex: function() {
    // debugger;
    var sidebarIndex = new Quack.Views.SidebarIndex({ collection: Quack.currentUser.sidebarItems() })
    this.addSubview(".users-channels", sidebarIndex);
  }

});
