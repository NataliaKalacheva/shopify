theme.searhResultSort = function () {
  if (location.search.length) {
    var index = location.search.indexOf("q=");
    var currentParams = location.search.slice(
      index + 2,
      location.search.length + 1
    );
    var tagGroupLink = $(".js-search-group-link");

    tagGroupLink.on("click", function (e) {
      e.preventDefault();

      var tag = $(this).parent();
      var tagUrl = currentParams + "+" + tag.data("tag-url").replace(" ", "+");

      if (!currentParams.includes(tagUrl)) {
        var newPath = window.location.href.replace(currentParams, tagUrl);
        window.location.href = newPath;
      }
    });
  }
};
