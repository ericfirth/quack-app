Quack.Views.ChannelForm = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  className: 'create-channel-form',

  events: {
    "submit": "submit",
    "click .js-modal-close": "closeModal"
  },

  template: JST["channels/form"],

  render: function () {
    var content = this.template({ channel: this.model });
    this.$el.html(content);
    return this;
  },

  closeModal: function() {
    $(".modal").removeClass("is-open");
    this.remove()
  },

  submit: function (event) {
    event.preventDefault();
    var name = $(event.target).serializeJSON().channel;
    this.model.set(name);
    this.model.save({}, {
      success: function () {
        this.collection.add(this.model);
        var url = "channels/" + this.model.id;
        var id = this.model.id
        this.model.set("original_id", id);
        this.model.set("_type", "Channel");
        this.model.set("id", "channel" + id);
        this.model.set("starred", false)
        Quack.currentUser.sidebarItems().add(this.model)
        this.closeModal();
        Backbone.history.navigate(url, { trigger: true });
      }.bind(this)
    })
  }
});
