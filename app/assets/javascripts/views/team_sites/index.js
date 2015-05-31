Quack.Views.TeamSitesIndex = Backbone.View.extend({
  initialize: function () {


    this.listenTo(this.collection, "sync add remove change:name change:email", this.render);
  },

  events: {
    "change .team-select": "goToTeam",
    "click .js-modal-close": "closeModal",
    "click .no-email": "changeEmail",
    "click .make-team-site-button": "makeNewTeamSite"
  },

  className: "team-site-index",

  template: JST["team_sites/index"],

  makeNewTeamSite: function(event) {
    event.preventDefault();
    var name = $(".team-site-name").val();
    var newTeamSite = new Quack.Models.TeamSite();
    newTeamSite.set("name", name);
    newTeamSite.save()
  },

  goToTeam: function(event) {
    var $target = $(event.target);
    if ($target.val() === "new") {
      $(".make-new-site").removeClass("invisible");
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
