Quack.Views.TeamSiteForm = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render)
  },

  template: JST["team_sites/form"],

  events: {
    "submit": "submit"
  },

  submit: function(event) {
    event.preventDefault();
    var attrs = this.$('.team-site-form').serializeJSON().team_site;
    this.model.set(attrs);

    var success = function () {
      this.collection.add(this.model, { merge: true })
      this.model.users().add(Quack.currentUser);
      Backbone.history.navigate("", { trigger: true })
    }.bind(this)

    var that = this;
    var errors = function (model, response) {
      var $errorList = $("<ul>");
      response.responseJSON.forEach(function (error) {
        var $li = $("<li>");
        $li.html(error);
        $errorList.append($li);
        that.$el.prepend($errorList);
      })
    }

    this.model.save({}, {
      success: success,
      error: errors
    });
  },

  render: function() {
    var content = this.template({ teamSite: this.model });
    this.$el.html(content);
    return this;
  }
})
