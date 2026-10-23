/**
 * ANBU TRADERS — HEAVY INDUSTRIAL STEEL SHUTTER PRELOADER CONTROLLER
 * Controls hydraulic gate slam, seam laser lock, smooth counter,
 * and physical shutter slide-open reveal.
 */
(function () {
  'use strict';

  var preloader = document.getElementById('anbu-preloader');
  if (!preloader) return;

  // Clear session lock on page reload so user can always inspect/test it
  try {
    var navEntries = performance.getEntriesByType('navigation');
    if (navEntries && navEntries.length > 0 && navEntries[0].type === 'reload') {
      sessionStorage.removeItem('anbu_site_loaded');
    }
  } catch (e) {}

  var counterEl = document.getElementById('anbu-counter');
  var startTime = Date.now();
  var openTriggerTime = 1300; // When gates begin sliding open
  var counterStart = 500;     // When counter starts ticking
  var counterEnd = 1250;      // When counter reaches 100%

  // Smooth number counter (0% -> 100%)
  function updateCounter() {
    if (!counterEl) return;
    var elapsed = Date.now() - startTime;
    if (elapsed < counterStart) {
      counterEl.textContent = '0%';
      requestAnimationFrame(updateCounter);
    } else if (elapsed < counterEnd) {
      var progress = (elapsed - counterStart) / (counterEnd - counterStart);
      var eased = 1 - Math.pow(1 - progress, 3);
      var val = Math.min(100, Math.floor(eased * 100));
      counterEl.textContent = val + '%';
      requestAnimationFrame(updateCounter);
    } else {
      counterEl.textContent = '100%';
    }
  }
  requestAnimationFrame(updateCounter);

  function triggerGateOpening() {
    if (!preloader || preloader.classList.contains('anbu-opening')) return;

    var elapsed = Date.now() - startTime;
    var remaining = Math.max(0, openTriggerTime - elapsed);

    setTimeout(function () {
      if (counterEl) counterEl.textContent = '100%';
      // Trigger physical shutter slide-open
      preloader.classList.add('anbu-opening');
      
      try {
        sessionStorage.setItem('anbu_site_loaded', 'true');
      } catch (e) {}

      // Clean up DOM after shutter completely clears the screen
      setTimeout(function () {
        if (preloader && preloader.parentNode) {
          preloader.parentNode.removeChild(preloader);
        }
      }, 550);
    }, remaining);
  }

  // Dismiss on window load or when ready
  if (document.readyState === 'complete') {
    triggerGateOpening();
  } else {
    window.addEventListener('load', triggerGateOpening);
  }

  // Safety fallback
  setTimeout(triggerGateOpening, 2400);
})();
