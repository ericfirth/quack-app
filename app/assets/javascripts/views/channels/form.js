Quack.Views.ChannelForm = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  tagName: 'form',

  events: {
    "submit": "submit"
  },

  template: JST["channels/form"],

  render: function () {
    var content = this.template({ channel: this.model });
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var name = this.$el.serializeJSON().channel;
    this.model.set(name);
    this.model.save({}, {
      success: function () {
        this.collection.add(this.model);
        Quack.currentUser.sidebarItems.add(this.model)
        var url = "channels/" + this.model.id;
        Backbone.history.navigate(url, { trigger: true });
      }.bind(this)
    })
  }
});
