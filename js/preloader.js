(function () {
  'use strict';
  var preloader = document.getElementById('anbu-preloader');
  if (preloader && preloader.parentNode) {
    preloader.parentNode.removeChild(preloader);
  }
})();
