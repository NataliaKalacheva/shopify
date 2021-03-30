theme.markExternalLinks = (function () {
  var re = new RegExp(location.host);

  function init() {
    var links = document.querySelectorAll("a");
    links.forEach((link) => testLink(link));
  }

  function testLink(link) {
    if (!re.test(link.hostname)) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "nofollow noopener");
    }
  }

  return {
    init: init,
  };
})();

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    theme.markExternalLinks.init();
  });
})();
