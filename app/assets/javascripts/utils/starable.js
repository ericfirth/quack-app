Quack.Mixins.Starable = {
  star: function () {
    if (!this._star) {
      this._star = new Quack.Models.Star;
    }
    return this._star;
  },

  createStar: function (starableType) {
    this.star().set("starable_id", this.id)
    this.star().set("starable_type", starableType)
    this.star().set("user_id", Quack.currentUser.id)
    this.star().save({}, {
      success: function () {
        if ((starableType === "User") || (starableType === "Channel")) {
          Quack.currentUser.starredSidebarItems().add(this.star())
        } else {
          Quack.currentUser.starredMessages().add(this.star())
        }
        this.updateStarCount(1);
      }.bind(this)
    })
  },

  destroyStar: function (starableType) {
    this.star().destroy({
      success: function(model) {
        if ((starableType === "Message") || (starableType === "PrivateMessage")) {
          Quack.currentUser.starredSidebarItems().remove(this.star())
        } else {
          Quack.currentUser.starredMessages().remove(this.star())
        }
        model.unset("id");
        this.updateStarCount(-1);
      }.bind(this)
    })
  },

  toggleStar: function (starableType) {
    if (this.star().isNew()) {
      this.createStar(starableType);
    } else {
      this.destroyStar(starableType);
    }
  },

  updateStarCount: function (delta) {
    this.set("num_stars", this.get("num_stars") + delta);
  }


}
