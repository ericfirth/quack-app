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
          this.set("starred", true)
          console.log(this.get("starred"))
          this.set("starId", this.star().id)
          Quack.currentUser.sidebarItems().add(this, { merge: true })
        } else {
          Quack.currentUser.starredMessages().add(this.star())
        }
      }.bind(this)
    })
  },
          // console.log(this.get("starred"))

  destroyStar: function (starableType) {

    this.star().destroy({
      success: function(model) {
        if ((starableType === "User") || (starableType === "Channel")) {
          this.set("starred", false);
          Quack.currentUser.sidebarItems().add(this, { merge: true })
        } else {
          Quack.currentUser.starredMessages().remove(this.star())
        }
        model.unset("id");
      }.bind(this)
    })
  },

  toggleStar: function (starableType) {
    // debugger;
    if (this.get("starred")) {
      this.destroyStar(starableType);
    } else {
      this.createStar(starableType);
    }
  }


}
