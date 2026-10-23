/**
 * ANBU TRADERS — CUSTOM STEEL PRELOADER CONTROLLER
 * Lightweight, zero-dependency, accessible.
 */
(function () {
  'use strict';

  var preloader = document.getElementById('anbu-preloader');
  if (!preloader) return;

  var startTime = Date.now();
  var minDuration = 1350; // Minimum time for beams + spark + logo to reveal (fits 1.2s - 1.8s)
  var maxSafetyTimeout = 2200; // Never block page longer than 2.2s

  function dismissPreloader() {
    if (!preloader || preloader.classList.contains('anbu-loaded')) return;

    var elapsed = Date.now() - startTime;
    var remaining = Math.max(0, minDuration - elapsed);

    setTimeout(function () {
      preloader.classList.add('anbu-loaded');
      try {
        sessionStorage.setItem('anbu_site_loaded', 'true');
      } catch (e) {}

      // Clean up DOM after transition
      setTimeout(function () {
        if (preloader && preloader.parentNode) {
          preloader.parentNode.removeChild(preloader);
        }
      }, 500);
    }, remaining);
  }

  // Dismiss on window load or when ready
  if (document.readyState === 'complete') {
    dismissPreloader();
  } else {
    window.addEventListener('load', dismissPreloader);
  }

  // Safety fallback
  setTimeout(dismissPreloader, maxSafetyTimeout);
})();
