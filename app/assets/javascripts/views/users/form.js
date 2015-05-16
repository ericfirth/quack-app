Quack.Views.UserForm = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  template: JST["users/form"],

  className: "avatar-edit-form",

  events: {
    "click .save-avatar": "submit",
    "change #input-avatar": "fileInputChange",
    "click .js-modal-close": "closeModal"
  },

  render: function() {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

  fileInputChange: function(event){
    console.log(event.currentTarget.files[0]);

    var that = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function(){
      that._updatePreview(reader.result);
      that.model._avatar = reader.result;
      console.log(that.model);
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      that._updatePreview("");
      delete that.model._avatar;
    }
  },

  _updatePreview: function(src){
    this.$el.find("#preview-avatar").attr("src", src);
  },

  closeModal: function() {
    $(".modal").removeClass("is-open");
  },

  submit: function (event) {
    var that = this;
    var formData = $(event.target).parent().serializeJSON().user;

    event.preventDefault();
    this.model.save(formData, {
      success: function () {
        $(".modal").removeClass("is-open");
      }
    })
  }

});
