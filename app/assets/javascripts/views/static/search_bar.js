Quack.Views.SearchBar = Backbone.View.extend({
  initialize: function() {

  },

  className: "search-bar",

  template: JST["static/search_bar"],

  events: {
    "submit .search-form": "search"
  },

  search: function(event) {
    event.preventDefault();
    var results = new Quack.Collections.SearchResults();
    var $input = this.$("#query");
    var $searchArea = $("#search").addClass("visible");
    $(".main-conversation").addClass("search-on")
    $(".footer").addClass("search-on")
    var searchResultsView = new Quack.Views.SearchResults({collection: results, $input: $input})
    $searchArea.html(searchResultsView.render().$el)
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  }

})
