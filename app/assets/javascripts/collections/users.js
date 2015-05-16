Quack.Collections.Users = Backbone.Collection.extend({
  // url: "api/users",
  model: Quack.Models.User,

  initialize: function(model, options) {
    this.teamSite = options.teamSite
  }//,
  //
  // getOrFetch: function (id) {
  //   var user = this.get(id);
  //   if (!user) {
  //     user = new Quack.Models.User({ id: id });
  //     user.fetch({
  //       success: function() {
  //         this.add(user)
  //       }.bind(this)
  //     })
  //   } else {
  //
  //   }
  // }
})
