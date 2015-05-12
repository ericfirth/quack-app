window.Quack = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Quack.Routers.Router({
      $rootEl: $("#main")
    })
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Quack.initialize();
});
