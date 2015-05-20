Quack.Views.InviteForm = Backbone.View.extend({
  initialize: function (options) {
    this.team = options.team
    this.listenTo(this.model, "sync", this.render)
  },

  template: JST["invites/form"],

  className: "invitation-form",

  events: {
    "click .send-invite": "submit",
    "click .js-modal-close": "closeModal"
  },

  closeModal: function() {
    $(".modal").removeClass("is-open");
  },

  render: function() {
    var content = this.template({ invite: this.model, team: this.team })
    this.$el.html(content);
    return this;
  },

  submit: function(event) {
    var formData = $(event.target).parent().serializeJSON().invite;
    event.preventDefault();
    this.model.set(formData);
    this.model.save({}, {
      success: function() {
        $(".modal").removeClass("is-open");
        this.remove()
      }.bind(this)
    })

  }

});
