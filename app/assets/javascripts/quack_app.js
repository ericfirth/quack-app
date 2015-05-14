window.Quack = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.currentUser = new Quack.Models.CurrentUser();
    this.currentUser.fetch();
    new Quack.Routers.Router({
      $rootEl: $("#main"),
      $header: $("#header"),
      $footer: $("#footer")
    })
    Backbone.history.start();
  }
};
