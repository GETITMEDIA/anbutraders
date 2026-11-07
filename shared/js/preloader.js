/**
 * ========================================================
 * ANBU TRADERS — VIDEO PRELOADER TO NAVBAR LOGO TRANSITION
 * Plays full-screen video preloader on index.html, freezes on
 * final logo frame, and animates the logo along a smooth curved
 * upward diagonal path while revealing the website behind it.
 * ========================================================
 */

(function () {
  'use strict';

  function initPreloader() {
    var preloader = document.getElementById('anbu-preloader');
    var video = document.getElementById('anbu-preloader-video');
    var videoWrapper = document.getElementById('anbu-video-wrapper');
    var backdrop = document.getElementById('anbu-preloader-backdrop');
    var flyingWrapper = document.getElementById('anbu-flying-logo-wrapper');
    var flyingLogo = document.getElementById('anbu-flying-logo');
    var flyingTargetLogo = document.getElementById('anbu-flying-logo-target');
    var navLogo = document.getElementById('anbu-navbar-logo') || document.querySelector('.navbar-brand img, .header-logo img, .logo img');

    if (!preloader || !video) return;

    var transitionTriggered = false;
    var isCompleted = false;

    function dismissImmediately() {
      if (navLogo) navLogo.style.opacity = '1';
      if (flyingWrapper) flyingWrapper.style.display = 'none';
      if (preloader) preloader.style.display = 'none';
      document.documentElement.classList.remove('anbu-preloader-active');
      document.body.classList.remove('anbu-preloader-active');
    }

    // Reduced motion preference check
    var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Lock scrolling and preserve top position
    document.documentElement.classList.add('anbu-preloader-active');
    document.body.classList.add('anbu-preloader-active');
    window.scrollTo(0, 0);

    if (prefersReducedMotion) {
      dismissImmediately();
      return;
    }

    // Hide navbar logo during transition flight to prevent duplicate logo
    if (navLogo) {
      navLogo.style.transition = 'opacity 0.25s ease';
      navLogo.style.opacity = '0';
    }

    // Set faster video playback rate for snappy logo animation
    video.playbackRate = 1.35;
    video.muted = true;
    video.defaultMuted = true;
    try {
      video.currentTime = 0;
    } catch (e) {}

    // Monitor video progress: trigger as soon as logo animation completes
    function checkVideoProgress() {
      if (transitionTriggered) return;
      if (video.duration && video.currentTime >= Math.max(video.duration - 0.15, 5.75)) {
        startTransition();
      }
    }

    video.addEventListener('timeupdate', checkVideoProgress);
    video.addEventListener('ended', function () {
      if (!transitionTriggered) startTransition();
    });

    // Fallback on error or autoplay failure
    video.addEventListener('error', function () {
      console.warn('Video failed to load or decode, executing transition fallback.');
      startTransition();
    });

    var playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(function (err) {
        console.warn('Video autoplay prevented, executing transition fallback:', err);
        startTransition();
      });
    }

    // Safety timeout in case video hangs (scaled for 1.35x playback)
    var safetyTimer = setTimeout(function () {
      if (!transitionTriggered) {
        startTransition();
      }
    }, 5500);

    function startTransition() {
      if (transitionTriggered) return;
      transitionTriggered = true;
      clearTimeout(safetyTimer);

      // 1. Pause video on its final frame
      video.pause();

      // 2. Fast responsive hold (~60ms) before instant flight
      setTimeout(function () {
        executeLogoFlight();
      }, 60);
    }

    function executeLogoFlight() {
      if (isCompleted) return;

      // Find navbar logo destination
      if (!navLogo) {
        navLogo = document.getElementById('anbu-navbar-logo') || document.querySelector('.navbar-brand img, .header-logo img, .logo img');
      }
      var targetRect = navLogo ? navLogo.getBoundingClientRect() : { left: 40, top: 40, width: 90, height: 90 };
      if (!targetRect.width || !targetRect.height) {
        targetRect = {
          left: targetRect.left || 40,
          top: targetRect.top || 40,
          width: 90,
          height: 90
        };
      }

      // Calculate rendered dimensions of video inside container (object-fit: contain)
      var vw = video.videoWidth || 720;
      var vh = video.videoHeight || 1280;
      var vRect = video.getBoundingClientRect();
      var videoAspect = vw / vh;
      var containerAspect = vRect.width / vRect.height;

      var renderedW, renderedH, renderedLeft, renderedTop;
      if (containerAspect > videoAspect) {
        // Pillarboxed on sides
        renderedH = vRect.height;
        renderedW = renderedH * videoAspect;
        renderedLeft = vRect.left + (vRect.width - renderedW) / 2;
        renderedTop = vRect.top;
      } else {
        // Letterboxed on top/bottom
        renderedW = vRect.width;
        renderedH = renderedW / videoAspect;
        renderedLeft = vRect.left;
        renderedTop = vRect.top + (vRect.height - renderedH) / 2;
      }

      // Logo coordinates within 720x1280 video:
      var logoVisualWidthInVideo = (535 / 720) * renderedW;
      var startSize = logoVisualWidthInVideo / 0.5735;

      // Screen size constraint for safety
      var maxStartSize = Math.min(window.innerHeight * 0.72, window.innerWidth * 0.88);
      if (startSize > maxStartSize) {
        startSize = maxStartSize;
      }

      var startCenterX = renderedLeft + renderedW * 0.5;
      var startCenterY = renderedTop + renderedH * 0.4972;

      var targetCenterX = targetRect.left + targetRect.width / 2;
      var targetCenterY = targetRect.top + targetRect.height / 2;

      var deltaX = targetCenterX - startCenterX;
      var deltaY = targetCenterY - startCenterY;
      
      // Target size calculation matching any aspect ratio perfectly
      var targetSize = Math.max(targetRect.width, targetRect.height);
      var scaleFactor = targetSize / startSize;

      // Position flying logo wrapper exactly over video center
      flyingWrapper.style.width = startSize + 'px';
      flyingWrapper.style.height = startSize + 'px';
      flyingWrapper.style.left = (startCenterX - startSize / 2) + 'px';
      flyingWrapper.style.top = (startCenterY - startSize / 2) + 'px';
      flyingWrapper.style.display = 'block';

      // Keep navbar logo invisible during flight
      if (navLogo) navLogo.style.opacity = '0';

      // Cross-fade to destination category logo if specified
      if (flyingTargetLogo && flyingTargetLogo.getAttribute('src') && flyingTargetLogo.getAttribute('src') !== (flyingLogo && flyingLogo.getAttribute('src'))) {
        flyingTargetLogo.style.display = 'block';
        flyingTargetLogo.style.opacity = '0';
        flyingTargetLogo.style.transition = 'opacity 280ms ease-in-out';
        if (flyingLogo) flyingLogo.style.transition = 'opacity 280ms ease-in-out';
        setTimeout(function () {
          flyingTargetLogo.style.opacity = '1';
          if (flyingLogo) flyingLogo.style.opacity = '0';
        }, 60);
      }

      // 3. Smoothly reveal the website behind the moving logo:
      backdrop.style.transition = 'opacity 580ms cubic-bezier(0.25, 1, 0.5, 1)';
      backdrop.style.opacity = '0';
      videoWrapper.style.transition = 'opacity 250ms ease-out';
      videoWrapper.style.opacity = '0';

      // 4. Construct smooth upward-curved diagonal trajectory (Speed boosted)
      var flightDuration = 620; // ms (fast, snappy, premium)
      var arcHeight = Math.min(48, Math.abs(deltaX) * 0.10 + 15); // Agile upward curve

      var keyframes = [];
      var steps = 40;
      for (var i = 0; i <= steps; i++) {
        var t = i / steps;
        var p = 1 - Math.pow(1 - t, 2.8);
        var arc = Math.sin(t * Math.PI) * arcHeight;
        var curX = deltaX * p;
        var curY = deltaY * p - arc;
        var curScale = 1 + (scaleFactor - 1) * p;

        keyframes.push({
          transform: 'translate3d(' + curX.toFixed(2) + 'px, ' + curY.toFixed(2) + 'px, 0) scale(' + curScale.toFixed(4) + ')',
          offset: t
        });
      }

      // Animate flight using Web Animations API
      var animation = flyingWrapper.animate(keyframes, {
        duration: flightDuration,
        easing: 'linear',
        fill: 'forwards'
      });

      animation.onfinish = function () {
        isCompleted = true;

        // 5. Seamlessly blend into actual navbar logo with no visible jump or duplicate
        if (navLogo) {
          navLogo.style.opacity = '1';
        }

        flyingWrapper.style.display = 'none';
        preloader.classList.add('anbu-dismissed');
        setTimeout(function () {
          preloader.style.display = 'none';
        }, 150);

        // Unlock page scrolling and interactions
        document.documentElement.classList.remove('anbu-preloader-active');
        document.body.classList.remove('anbu-preloader-active');
      };
    }

    // Attach listener for clicks to Home/Logo while already on same page
    function attachSamePageHomeLinks() {
      var currentFile = window.location.pathname.split('/').pop() || 'index.html';
      var homeSelectors = [
        'a[href="' + currentFile + '"]',
        'a[href="./' + currentFile + '"]',
        'a[href="index.html"]',
        'a[href="./index.html"]'
      ];
      if (currentFile === 'index-demo-3.html') {
        homeSelectors.push('.navbar-brand[href="#"]');
      }
      var links = document.querySelectorAll(homeSelectors.join(', '));
      links.forEach(function (link) {
        link.addEventListener('click', function (e) {
          var href = link.getAttribute('href');
          if (href === currentFile || href === './' + currentFile || (currentFile === 'index.html' && (href === 'index.html' || href === './index.html')) || (currentFile === 'index-demo-3.html' && href === '#')) {
            e.preventDefault();
            window.scrollTo(0, 0);
            window.location.reload();
          }
        });
      });
    }
    attachSamePageHomeLinks();

    // Expose replay for debugging
    window.AnbuPreloader = {
      replay: function () {
        window.scrollTo(0, 0);
        window.location.reload();
      }
    };
  }

  // Handle back/forward navigation from bfcache so animation triggers every time
  window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
      window.scrollTo(0, 0);
      window.location.reload();
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPreloader);
  } else {
    initPreloader();
  }
})();
