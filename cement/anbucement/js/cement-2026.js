/**
 * ==========================================================================
 * ANBU STEEL & CEMENT — PREMIUM 2026 INTERACTION ENGINE
 * Vanilla JavaScript (High-Performance, Zero Heavy Dependency)
 * ==========================================================================
 */

(function () {
  'use strict';

  // 1. Sticky Navbar Transition on Scroll
  function initNavbarScroll() {
    var navbar = document.querySelector('#banner.navbar');
    if (!navbar) return;

    function checkScroll() {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
  }

  // 2. Animated Number Counters with IntersectionObserver
  function initCounters() {
    var counterEls = document.querySelectorAll('[data-counter-target]');
    if (!counterEls.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    counterEls.forEach(function (el) {
      observer.observe(el);
    });

    function animateCounter(el) {
      var target = parseFloat(el.getAttribute('data-counter-target')) || 0;
      var suffix = el.getAttribute('data-counter-suffix') || '';
      var prefix = el.getAttribute('data-counter-prefix') || '';
      var duration = 1800; // ms
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        // Easing out cubic
        var easeProgress = 1 - Math.pow(1 - progress, 3);
        var current = Math.floor(easeProgress * target);

        // Format with commas if > 999
        var displayStr = current >= 1000 ? current.toLocaleString('en-IN') : current;
        el.textContent = prefix + displayStr + suffix;

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          var finalStr = target >= 1000 ? target.toLocaleString('en-IN') : target;
          el.textContent = prefix + finalStr + suffix;
        }
      }

      window.requestAnimationFrame(step);
    }
  }

  // 3. Project Showcase Filter Tabs
  function initProjectFilters() {
    var filterBtns = document.querySelectorAll('.showcase-filter-btn');
    var cards = document.querySelectorAll('.showcase-card');
    if (!filterBtns.length || !cards.length) return;

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var category = this.getAttribute('data-filter');

        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');

        cards.forEach(function (card) {
          var cardCategory = card.getAttribute('data-category');
          if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          } else {
            card.style.display = 'none';
            card.style.opacity = '0';
          }
        });
      });
    });
  }

  // 4. Back to Top Button
  function initBackToTop() {
    var btn = document.getElementById('backToTopBtn');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 350) {
        btn.style.display = 'flex';
      } else {
        btn.style.display = 'none';
      }
    }, { passive: true });

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 5. Testimonials Owl Carousel fallback or init
  function initTestimonialsCarousel() {
    if (typeof jQuery !== 'undefined' && jQuery.fn.owlCarousel) {
      var $carousel = jQuery('.cement-testimonials-carousel');
      if ($carousel.length) {
        $carousel.owlCarousel({
          items: 1,
          loop: true,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          smartSpeed: 800,
          dots: true,
          nav: false,
          responsive: {
            0: { items: 1 },
            768: { items: 2, margin: 24 },
            1024: { items: 3, margin: 24 }
          }
        });
      }
    }
  }

  // Initialize all components on DOM ready
  document.addEventListener('DOMContentLoaded', function () {
    initNavbarScroll();
    initCounters();
    initProjectFilters();
    initBackToTop();
    initTestimonialsCarousel();
  });
})();

