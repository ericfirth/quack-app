Quack.Collections.SidebarItems = Backbone.Collection.extend({
  // url: "api/stars",
  initialize: function (model, options) {
    this.user = options.user
  },

  model: function(attrs) {
    var newModel

    newModel = new Quack.Models[attrs._type](attrs);
    return newModel;
  },

  numStars: function() {
    var num = 0;
    this.each(function(model) {
      if (model.attributes.starred) {
        num++
      }
    })

    return num;
  }

});
