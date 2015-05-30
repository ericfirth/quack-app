Quack.Views.TeamSitesIndex = Backbone.View.extend({
  initialize: function () {


    this.listenTo(this.collection, "sync add remove change:name change:email", this.render);
  },

  events: {
    "change .team-select": "goToTeam",
    "click .js-modal-close": "closeModal",
    "click .no-email": "changeEmail"
  },

  className: "team-site-index",

  template: JST["team_sites/index"],

  goToTeam: function(event) {
    var $target = $(event.target);
    if ($target.val() === "new") {
      Backbone.history.navigate("team_sites/new", { trigger: true });
    } else {
      var teamSite = new Quack.Models.TeamSite({id: $target.val()})
      teamSite.fetch({
        success: function() {
          Quack.currentUser.set("team_site_id", teamSite.id);
          Quack.currentUser.fetch();
          $(".modal").removeClass("is-open");
          this.remove();
          $(".content").removeClass("none");
          $(".sidebar").removeClass("full");
          var channelId = teamSite.get("channel_to_display")
          var url = "channels/" + channelId
          Backbone.history.navigate(url, { trigger: true })
        }.bind(this)
      })
    }
  },

  changeEmail: function (event) {
    event.preventDefault();
    email = $("#email-input").val();
    Quack.currentUser.set("email", email);
    Quack.currentUser.save({}, {
      success: function() {
        $(".email-check").empty();
        $(".email-check").text("Thank You!");
      },
      error: function() {
        $errorMessage = $("<span>");
        $errorMessage.addClass("error-message").text("That is an invalid or already used email, sorry. Try again.");
        $(".email-check").prepend($errorMessage);
      }
    });
  },

  render: function () {
    var authToken = $('meta[name=csrf-token]').attr('content')
    var content = this.template({
      teamSites: this.collection,
      authToken: authToken
    });
    this.$el.html(content);
    return this;
  }

})
