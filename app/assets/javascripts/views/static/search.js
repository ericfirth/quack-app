Quack.Views.SearchResults = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.$input = options.$input
    this.beginSearch();
    this.listenTo(this.collection, "sync", this.renderResults);
  },

  template: JST["static/search"],

  beginSearch: function() {
    this.collection.searchInfo.query = this.$input.val();
    this.collection.searchInfo.page = 1;

    this.collection.fetch({
      data: this.collection.searchInfo,
      success: function() {
        console.log(this.collection.length);
      }.bind(this)
    });
    // "click button": "search"
  },

  render: function() {
    var content = this.template({ input: this.$input })
    this.$el.html(content);
    return this;
  },

  renderResults: function () {
    this.$(".search-results").empty;

    var view;
    this.collection.each(function(result) {
      view = new Quack.Views.MessageShow({ model: result });
      this.addSubview(".search-results", view);
    }.bind(this))
  },

  nextPage: function() {
    this.collection.searchInfo.page++
    this.collection.fetch({
      data: this.collection.searchInfo
    })
  }

});
