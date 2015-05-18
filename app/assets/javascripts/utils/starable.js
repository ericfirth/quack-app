Quack.Mixins.Starable = {
  star: function () {
    if (!this._star) {
      this._star = new Quack.Models.Star;
    }
    return this._star;
  },

  createStar: function () {
    this.star().save({}, {
      success: function () {
        this.updateStarCount(1);
      }.bind(this)
    })
  },

  destroyStar: function () {
    this.star().destroy({
      success: function(model) {
        model.unset("id");
        this.updateStarCount(-1);
      }.bind(this)
    })
  },

  toggleStar: function () {
    if (this.star().isNew()) {
      this.createStar();
    } else {
      this.destroyStar();
    }
  },

  updateStarCount: function (delta) {
    this.set("num_stars", this.get("num_stars") + delta);
  },

  parseStar: function (payload) {
    var attrs = {};
    attrs[this.starableOptions.foreignKey] = payload.id;
    this.star().set(attrs);

    if (payload.star) {
      this.star().set(payload.star);
      delete payload.star
    }
  }


}
