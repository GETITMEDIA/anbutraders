/**
 * ========================================================
 * ANBU TRADERS - 2026 PREMIUM INTERACTION & ANIMATION ENGINE
 * ========================================================
 * High-performance, lightweight vanilla JS for:
 * - IntersectionObserver Scroll Reveal Animations (Fade, Slide, Scale)
 * - Animated Stats Counter with Ease-Out Curve
 * - Smooth Brand Logo Marquee with Hover Pause
 * - Button Material Ripple Effect
 * - Subtle Hero Parallax
 * - Full prefers-reduced-motion accessibility support
 * ========================================================
 */

(function () {
  'use strict';

  // Check user motion preferences
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * 1. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
   */
  function initScrollReveal() {
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-fade-up, .reveal-slide-left, .reveal-slide-right, .reveal-scale').forEach(function (el) {
        el.classList.add('is-revealed');
      });
      return;
    }

    var revealElements = document.querySelectorAll(
      '.reveal-fade-up, .reveal-slide-left, .reveal-slide-right, .reveal-scale, [data-reveal]'
    );

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(function (el) {
        el.classList.add('is-revealed');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var target = entry.target;
            var delay = target.getAttribute('data-reveal-delay') || 0;

            if (delay > 0) {
              setTimeout(function () {
                target.classList.add('is-revealed');
              }, parseInt(delay, 10));
            } else {
              target.classList.add('is-revealed');
            }

            obs.unobserve(target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /**
   * 2. ANIMATED STATS COUNTER
   */
  function initStatsCounter() {
    var counters = document.querySelectorAll('[data-counter-target]');
    if (counters.length === 0) return;

    function animateCount(el) {
      var target = parseFloat(el.getAttribute('data-counter-target')) || 0;
      var suffix = el.getAttribute('data-counter-suffix') || '';
      var prefix = el.getAttribute('data-counter-prefix') || '';
      var duration = 2000; // ms
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        // Ease-out expo curve for ultra smooth deceleration
        var easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        var currentVal = Math.floor(easeOutProgress * target);

        // Format Indian number system if >= 1000
        var formatted = currentVal.toLocaleString('en-IN');
        el.textContent = prefix + formatted + suffix;

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = prefix + target.toLocaleString('en-IN') + suffix;
        }
      }

      window.requestAnimationFrame(step);
    }

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      counters.forEach(function (el) {
        var target = parseFloat(el.getAttribute('data-counter-target')) || 0;
        var suffix = el.getAttribute('data-counter-suffix') || '';
        var prefix = el.getAttribute('data-counter-prefix') || '';
        el.textContent = prefix + target.toLocaleString('en-IN') + suffix;
      });
      return;
    }

    var counterObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    counters.forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  /**
   * 3. BUTTON MATERIAL RIPPLE EFFECT
   */
  function initButtonRipple() {
    if (prefersReducedMotion) return;

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.btn-ripple, .btn-hero-primary, .btn-hero-whatsapp, .buy-btn, .btn-primary');
      if (!btn) return;

      var rect = btn.getBoundingClientRect();
      var circle = document.createElement('span');
      var diameter = Math.max(rect.width, rect.height);
      var radius = diameter / 2;

      circle.style.width = circle.style.height = diameter + 'px';
      circle.style.left = e.clientX - rect.left - radius + 'px';
      circle.style.top = e.clientY - rect.top - radius + 'px';
      circle.classList.add('btn-ripple-wave');

      var existingRipple = btn.querySelector('.btn-ripple-wave');
      if (existingRipple) {
        existingRipple.remove();
      }

      btn.appendChild(circle);

      setTimeout(function () {
        circle.remove();
      }, 600);
    });
  }

  /**
   * 4. SUBTLE HERO PARALLAX ON MOUSEMOVE & SCROLL
   */
  function initHeroParallax() {
    if (prefersReducedMotion) return;

    var heroSection = document.getElementById('anbu-hero-carousel-section');
    if (!heroSection) return;

    var isHeroVisible = true;
    var heroObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          isHeroVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    heroObserver.observe(heroSection);

    // Mousemove 3D micro-tilt for active hero card
    heroSection.addEventListener('mousemove', function (e) {
      if (!isHeroVisible) return;
      var activeCard = heroSection.querySelector('.hero-slide.active .hero-content-card');
      if (!activeCard) return;

      var rect = heroSection.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;

      activeCard.style.transform =
        'perspective(1000px) rotateY(' + x * 4 + 'deg) rotateX(' + -y * 4 + 'deg) translateZ(6px)';
    });

    heroSection.addEventListener('mouseleave', function () {
      var activeCard = heroSection.querySelector('.hero-slide.active .hero-content-card');
      if (activeCard) {
        activeCard.style.transform = '';
      }
    });

    // Window scroll parallax for active background
    window.addEventListener(
      'scroll',
      function () {
        if (!isHeroVisible) return;
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollY < 800) {
          var activeBg = heroSection.querySelector('.hero-slide.active .hero-slide-bg');
          if (activeBg) {
            activeBg.style.transform = 'scale(1.035) translateY(' + scrollY * 0.12 + 'px)';
          }
        }
      },
      { passive: true }
    );
  }

  /**
   * 5. INFINITE BRAND MARQUEE HOVER PAUSE & CLONE
   */
  function initBrandMarquee() {
    var marquees = document.querySelectorAll('.brand-marquee-track');
    marquees.forEach(function (track) {
      // Clone children to ensure seamless endless looping
      var clone = track.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      if (track.parentNode) {
        track.parentNode.appendChild(clone);
      }
    });
  }

  /**
   * INITIALIZE ALL ON DOM READY
   */
  function initAll() {
    initScrollReveal();
    initStatsCounter();
    initButtonRipple();
    initHeroParallax();
    initBrandMarquee();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();

