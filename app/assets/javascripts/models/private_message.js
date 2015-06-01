Quack.Models.PrivateMessage = Backbone.Model.extend(
  _.extend({}, Quack.Mixins.Starable, {
    urlRoot: "api/private_messages",

    toJSON: function() {
      var json = {private_message: _.clone(this.attributes)};

      if (this._file) {
        json.private_message.file = this._file;
      }

      return json;
    },

    date: function () {

      var date = this.get("timestamp");
      date = new Date(date);
      return date
    },

    compareDateTruthy: function (otherMessage) {
      var date = this.date();
      var date2 = otherMessage.date();

      if (date.getDate() === date2.getDate()
          && date.getMonth() === date2.getMonth()
          && date.getFullYear() === date2.getFullYear()) {
        return true;
      } else {
        return false;
      }
    },
    formatTime: function () {
      var amPm = ""
      var hour = this.date().getHours();

      if (hour < 12) {
        amPm = "AM";
      } else {
        amPm = "PM";
      }

      if (hour == 0) {
        hour = 12;
      }

      if (hour > 12) {
        hour = hour - 12;
      }

      var min = this.date().getMinutes();
      if (min < 10) {
        min = "0" + min
      }


      return "" + hour + ":" + min + " " + amPm
    }


  })
)
