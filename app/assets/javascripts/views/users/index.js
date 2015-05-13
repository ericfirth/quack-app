Quack.Views.UsersIndex = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addUserIndexItem);
    this.collection.each(this.addUserIndexItem.bind(this));
  },

  tagName: "section",

  className: "users",

  template: JST["users/index"],

  addUserIndexItem: function(indexItem) {
    var userIndexItemView = new Quack.Views.UsersIndexItem({ model: indexItem });
    this.addSubview('.users-list', userIndexItemView);
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  }

});
