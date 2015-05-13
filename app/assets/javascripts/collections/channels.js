Quack.Collections.Channels = Backbone.Collection.extend({
  url: "api/channels",

  model: Quack.Models.Channel,

  initialize: function (model, options) {
    this.teamSite = options.teamSite;
  },

  getOrFetch: function (id) {
    var channel = this.get(id);
    if (!channel) {
      channel = new Quack.Models.Channel({id:id});
      channel.fetch({
        success: function() {
          this.add(channel);
        }.bind(this)
      })
    } else {
      channel.fetch();
    }

    return channel;
  }
})
