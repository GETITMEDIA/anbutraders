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
   * 1. SCROLL REVEAL ANIMATIONS (Dual-Layer: Native IntersectionObserver + WOW.js Bridge)
   */
  function initScrollReveal() {
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-fade-up, .reveal-slide-left, .reveal-slide-right, .reveal-scale, .wow').forEach(function (el) {
        el.classList.add('is-revealed', 'animated');
        el.style.visibility = 'visible';
      });
      return;
    }

    var revealElements = document.querySelectorAll(
      '.reveal-fade-up, .reveal-slide-left, .reveal-slide-right, .reveal-scale, [data-reveal], .wow'
    );

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(function (el) {
        el.classList.add('is-revealed', 'animated');
        el.style.visibility = 'visible';
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var target = entry.target;
            var delayRaw = target.getAttribute('data-wow-delay') || target.getAttribute('data-reveal-delay') || '0';
            var delayMs = 0;
            if (delayRaw.indexOf('ms') !== -1) {
              delayMs = parseFloat(delayRaw);
            } else if (delayRaw.indexOf('s') !== -1) {
              delayMs = parseFloat(delayRaw) * 1000;
            } else {
              delayMs = parseFloat(delayRaw) || 0;
            }

            function triggerReveal() {
              target.classList.add('is-revealed', 'animated');
              target.style.visibility = 'visible';
              if (target.classList.contains('fadeInUp')) {
                target.classList.add('fadeInUp');
              } else if (target.classList.contains('fadeIn')) {
                target.classList.add('fadeIn');
              } else if (target.classList.contains('wow')) {
                target.classList.add('fadeInUp');
              }
            }

            if (delayMs > 0) {
              setTimeout(triggerReveal, delayMs);
            } else {
              triggerReveal();
            }

            obs.unobserve(target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
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
   * 6. OUR BUSINESSES BENTO SHOWCASE (Category Filter + 3D Tilt Dynamics)
   */
  function initBusinessesBento() {
    var filterBtns = document.querySelectorAll('.biz-filter-btn');
    var cards = document.querySelectorAll('.biz-bento-card');
    if (!filterBtns.length || !cards.length) return;

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.getAttribute('data-filter');
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        cards.forEach(function (card) {
          var category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.classList.remove('filtered-out');
            card.classList.add('filtered-in');
          } else {
            card.classList.add('filtered-out');
            card.classList.remove('filtered-in');
          }
        });
      });
    });

    // 3D Perspective Mouse Tilt (Disabled on mobile / touch or prefers-reduced-motion)
    if (!prefersReducedMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      cards.forEach(function (card) {
        card.addEventListener('mousemove', function (e) {
          var rect = card.getBoundingClientRect();
          var x = e.clientX - rect.left;
          var y = e.clientY - rect.top;
          var centerX = rect.width / 2;
          var centerY = rect.height / 2;
          var deltaX = (x - centerX) / centerX;
          var deltaY = (y - centerY) / centerY;
          var rotateX = deltaY * -4.5;
          var rotateY = deltaX * 4.5;
          card.style.transform = 'perspective(1000px) rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg) translateY(-8px)';
        });

        card.addEventListener('mouseleave', function () {
          card.style.transform = '';
        });
      });
    }
  }

  /**
   * 7. NAVBAR SHRINK & GLASSMORPHISM ON SCROLL
   */
  function initNavbarShrink() {
    var navbar = document.querySelector('.navbar.sticky-top');
    if (!navbar) return;

    var handleScroll = function () {
      var scrollY = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /**
   * 8. HERO REFERENCE INTERACTIVE DOCKED PILLS
   */
  function initHeroReferencePills() {
    var pills = document.querySelectorAll('.ref-dock-pill');
    var bgLayers = document.querySelectorAll('.hero-bg-layer');
    if (!pills.length || !bgLayers.length) return;

    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        var targetId = this.getAttribute('data-target-bg');
        pills.forEach(function (p) { p.classList.remove('is-active'); });
        this.classList.add('is-active');

        bgLayers.forEach(function (layer) {
          if (layer.id === targetId) {
            layer.classList.add('is-active');
          } else {
            layer.classList.remove('is-active');
          }
        });
      });

      pill.addEventListener('dblclick', function () {
        var link = this.getAttribute('data-link');
        if (link) window.location.href = link;
      });
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
    initBusinessesBento();
    initNavbarShrink();
    initHeroReferencePills();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();

