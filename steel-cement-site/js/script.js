/**
 * ==========================================================================
 * ANBU STEEL & CEMENT — 2026 INTERACTIVE ANIMATION & UX ENGINE
 * ==========================================================================
 * Features:
 * - Smart Hide-on-Scroll-Down / Show-on-Scroll-Up Navbar + Progress Bar
 * - Progressive IntersectionObserver Scroll Reveal Animations
 * - Ease-Out Animated Number Counters
 * - 3D Card Tilt & Cursor Spotlight Glow
 * - Button Material Ripple Wave
 * - Brand & Project Category Filters + Lightbox Modal
 * - Steel & Cement BOQ Estimator Calculator
 * - Interactive Contact Chips, Copy Toast & FAQ Accordion
 * ==========================================================================
 */

(function () {
  'use strict';

  var prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 1. SMART SCROLL NAVBAR (Hide Down / Show Up) & PROGRESS BAR ── */
  function initSmartNavbar() {
    var nav = document.getElementById('banner');
    if (!nav) return;

    // Ensure progress hairline bar exists inside navbar
    var progressBar = nav.querySelector('.anbu-scroll-progress');
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.className = 'anbu-scroll-progress';
      progressBar.setAttribute('aria-hidden', 'true');
      nav.appendChild(progressBar);
    }

    var backToTopBtn = document.querySelector('.back-to-top');
    var collapseEl = document.getElementById('collapsibleNavbar');
    var lastScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    var ticking = false;

    function updateNavbar() {
      var currentY = window.pageYOffset || document.documentElement.scrollTop || 0;
      var docHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      var pct = Math.min(Math.max((currentY / docHeight) * 100, 0), 100);
      progressBar.style.width = pct.toFixed(1) + '%';

      // Back to top button visibility
      if (backToTopBtn) {
        if (currentY > 360) {
          backToTopBtn.classList.add('is-visible');
        } else {
          backToTopBtn.classList.remove('is-visible');
        }
      }

      var isMobileMenuOpen = collapseEl && collapseEl.classList.contains('show');
      if (isMobileMenuOpen || currentY <= 48) {
        nav.classList.remove('nav-scroll-hidden');
        if (currentY > 48) {
          nav.classList.add('nav-scroll-visible');
        } else {
          nav.classList.remove('nav-scroll-visible');
        }
        lastScrollY = currentY;
        ticking = false;
        return;
      }

      var delta = currentY - lastScrollY;
      if (currentY > 115 && delta > 5) {
        // Scrolling down -> hide navbar
        nav.classList.add('nav-scroll-hidden');
        nav.classList.remove('nav-scroll-visible');
      } else if (delta < -5) {
        // Scrolling up -> reveal glassmorphic navbar
        nav.classList.remove('nav-scroll-hidden');
        nav.classList.add('nav-scroll-visible');
      }

      lastScrollY = currentY;
      ticking = false;
    }

    window.addEventListener(
      'scroll',
      function () {
        if (!ticking) {
          window.requestAnimationFrame(updateNavbar);
          ticking = true;
        }
      },
      { passive: true }
    );

    updateNavbar();
  }

  /* ── 2. MOBILE COLLAPSE ICON TOGGLE & SMOOTH ANCHORS ── */
  function initNavigationHelpers() {
    if (window.jQuery) {
      var $ = window.jQuery;
      $('#collapsibleNavbar').on('show.bs.collapse', function () {
        $('.menu-icon').hide();
        $('.close-icon').show();
        $('#banner').removeClass('nav-scroll-hidden').addClass('nav-scroll-visible');
      });
      $('#collapsibleNavbar').on('hide.bs.collapse', function () {
        $('.menu-icon').show();
        $('.close-icon').hide();
      });

      // Close mobile menu when clicking an anchor link
      $('#collapsibleNavbar .nav-link').on('click', function () {
        if ($('#collapsibleNavbar').hasClass('show')) {
          $('#collapsibleNavbar').collapse('hide');
        }
      });
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (href === '#' || href === '#top') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
          return;
        }
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          var y = target.getBoundingClientRect().top + window.pageYOffset - 84;
          window.scrollTo({ top: Math.max(0, y), behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }
      });
    });
  }

  /* ── 3. PROGRESSIVE SCROLL REVEAL ANIMATIONS ── */
  function initScrollReveal() {
    var items = document.querySelectorAll('[data-animate]');
    if (!items.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) {
        el.classList.add('anbu-revealed');
      });
      return;
    }

    document.documentElement.classList.add('anbu-anim-ready');

    function revealEl(el) {
      var delay = el.getAttribute('data-delay');
      if (delay) {
        el.style.transitionDelay = delay;
      }
      el.classList.add('anbu-revealed');
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            revealEl(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    items.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        revealEl(el);
      } else {
        observer.observe(el);
      }
    });
  }

  /* ── 4. ANIMATED STATS COUNTERS ── */
  function initCounters() {
    var counters = document.querySelectorAll('.counter[data-target]');
    if (!counters.length) return;

    function formatNumber(n) {
      return Math.floor(n).toLocaleString('en-US');
    }

    function runCounter(el) {
      var target = parseInt(el.getAttribute('data-target'), 10);
      if (isNaN(target)) return;
      if (prefersReducedMotion) {
        el.textContent = formatNumber(target);
        return;
      }

      var duration = 1700;
      var start = null;

      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        el.textContent = formatNumber(eased * target);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = formatNumber(target);
        }
      }

      window.requestAnimationFrame(step);
    }

    if (!('IntersectionObserver' in window)) {
      counters.forEach(runCounter);
      return;
    }

    var obs = new IntersectionObserver(
      function (entries, o) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            runCounter(entry.target);
            o.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    counters.forEach(function (c) {
      obs.observe(c);
    });
  }

  /* ── 5. 3D PERSPECTIVE TILT & CURSOR SPOTLIGHT GLOW ── */
  function initCardTilt() {
    if (
      prefersReducedMotion ||
      !window.matchMedia ||
      !window.matchMedia('(hover: hover) and (pointer: fine)').matches
    ) {
      return;
    }

    document.querySelectorAll('.anbu-tilt-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        card.style.setProperty('--mx', x + 'px');
        card.style.setProperty('--my', y + 'px');

        var cx = rect.width / 2;
        var cy = rect.height / 2;
        var rx = ((y - cy) / cy) * -4.2;
        var ry = ((x - cx) / cx) * 4.2;
        card.style.transform =
          'perspective(950px) rotateX(' +
          rx.toFixed(2) +
          'deg) rotateY(' +
          ry.toFixed(2) +
          'deg) translateY(-6px)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  /* ── 6. MATERIAL BUTTON RIPPLE EFFECT ── */
  function initButtonRipple() {
    if (prefersReducedMotion) return;

    document.addEventListener('click', function (e) {
      var btn = e.target.closest(
        '.anbu-ripple-btn, .btn-hero-clean, .anbu-enquiry-btn, .call-us-sec .btn.more-btn, .btn-send-message, .anbu-footer-review-btn'
      );
      if (!btn) return;

      btn.classList.add('anbu-ripple-btn');
      var rect = btn.getBoundingClientRect();
      var size = Math.max(rect.width, rect.height);
      var wave = document.createElement('span');
      wave.className = 'anbu-ripple-wave';
      wave.style.width = size + 'px';
      wave.style.height = size + 'px';
      wave.style.left = e.clientX - rect.left - size / 2 + 'px';
      wave.style.top = e.clientY - rect.top - size / 2 + 'px';

      var old = btn.querySelector('.anbu-ripple-wave');
      if (old) old.remove();
      btn.appendChild(wave);
      setTimeout(function () {
        if (wave.parentNode) wave.parentNode.removeChild(wave);
      }, 650);
    });
  }

  /* ── 7. GENERIC CATEGORY FILTERING (Brands & Projects) ── */
  function initFilterGroups() {
    document.querySelectorAll('[data-filter-bar]').forEach(function (bar) {
      var targetGridId = bar.getAttribute('data-filter-bar');
      var grid = document.getElementById(targetGridId);
      if (!grid) return;

      var buttons = bar.querySelectorAll('.anbu-filter-pill[data-filter]');
      var items = grid.querySelectorAll('[data-category]');

      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var filter = btn.getAttribute('data-filter');
          buttons.forEach(function (b) {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
          });
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');

          items.forEach(function (item) {
            var cats = (item.getAttribute('data-category') || '').split(/\s+/);
            var show = filter === 'all' || cats.indexOf(filter) !== -1;
            if (show) {
              item.style.display = '';
              item.classList.add('anbu-revealed');
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    });
  }

  /* ── 8. SPEC MATRIX TABS (Services Page) ── */
  function initSpecTabs() {
    var tabBars = document.querySelectorAll('[data-tab-group]');
    tabBars.forEach(function (bar) {
      var group = bar.getAttribute('data-tab-group');
      var buttons = bar.querySelectorAll('[data-tab-target]');
      var panels = document.querySelectorAll('[data-tab-panel="' + group + '"]');

      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var targetId = btn.getAttribute('data-tab-target');
          buttons.forEach(function (b) {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
          });
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');

          panels.forEach(function (p) {
            if (p.id === targetId) {
              p.style.display = 'block';
            } else {
              p.style.display = 'none';
            }
          });
        });
      });
    });
  }

  /* ── 9. LIVE STEEL & CEMENT BOQ CALCULATOR (Services Page) ── */
  function initBOQCalculator() {
    var areaInput = document.getElementById('calcBuiltupArea');
    var areaRange = document.getElementById('calcBuiltupRange');
    var typeSelect = document.getElementById('calcProjectType');
    var gradeSelect = document.getElementById('calcCementGrade');
    if (!areaInput || !typeSelect) return;

    var outCement = document.getElementById('calcResCement');
    var outSteel = document.getElementById('calcResSteel');
    var outAgg = document.getElementById('calcResAgg');
    var outWa = document.getElementById('calcWhatsAppBtn');

    function compute() {
      var sqft = Math.max(100, Math.min(50000, parseInt(areaInput.value, 10) || 1000));
      var type = typeSelect.value;
      var grade = gradeSelect ? gradeSelect.value : 'OPC 53 + PPC';

      // Standard civil engineering thumb rules:
      // Residential G+1: ~0.40 bags cement/sqft, ~3.8 kg TMT steel/sqft
      // Commercial/Multi-storey: ~0.46 bags cement/sqft, ~4.8 kg TMT steel/sqft
      // Industrial/Foundation Slab: ~0.36 bags cement/sqft, ~4.2 kg TMT steel/sqft
      var cementFactor = type === 'commercial' ? 0.46 : type === 'industrial' ? 0.36 : 0.4;
      var steelFactor = type === 'commercial' ? 4.8 : type === 'industrial' ? 4.2 : 3.8;
      var sandCftFactor = type === 'commercial' ? 1.9 : 1.75;

      var bags = Math.round(sqft * cementFactor);
      var steelKg = Math.round(sqft * steelFactor);
      var steelTons = (steelKg / 1000).toFixed(2);
      var sandCft = Math.round(sqft * sandCftFactor);

      if (outCement) outCement.textContent = bags.toLocaleString('en-US') + ' Bags';
      if (outSteel) outSteel.textContent = steelTons + ' MT (' + steelKg.toLocaleString('en-US') + ' kg)';
      if (outAgg) outAgg.textContent = sandCft.toLocaleString('en-US') + ' Cu.ft';

      if (outWa) {
        var msg =
          'Hi Anbu Steel & Cement, please quote wholesale rates for my ' +
          sqft +
          ' sq.ft (' +
          type +
          ') project.\nEstimated Requirement: ' +
          bags +
          ' Bags (' +
          grade +
          ') & ' +
          steelTons +
          ' MT Fe-550D TMT Steel.';
        outWa.href = 'https://wa.me/919626325204?text=' + encodeURIComponent(msg);
      }
    }

    areaInput.addEventListener('input', function () {
      if (areaRange) areaRange.value = Math.min(10000, Math.max(300, parseInt(areaInput.value, 10) || 1000));
      compute();
    });
    if (areaRange) {
      areaRange.addEventListener('input', function () {
        areaInput.value = areaRange.value;
        compute();
      });
    }
    typeSelect.addEventListener('change', compute);
    if (gradeSelect) gradeSelect.addEventListener('change', compute);
    compute();
  }

  /* ── 10. PROJECT GALLERY LIGHTBOX (Our Projects Page) ── */
  function initProjectLightbox() {
    var modal = document.getElementById('anbuProjectLightbox');
    var cards = Array.prototype.slice.call(
      document.querySelectorAll('.anbu-gallery-card[data-lb-src]')
    );
    if (!modal || !cards.length) return;

    var imgEl = document.getElementById('lbImg');
    var badgeEl = document.getElementById('lbBadge');
    var titleEl = document.getElementById('lbTitle');
    var descEl = document.getElementById('lbDesc');
    var waEl = document.getElementById('lbWaBtn');
    var currentIdx = 0;
    var activePool = cards;

    function getVisibleCards() {
      var visible = cards.filter(function (c) {
        return c.style.display !== 'none';
      });
      return visible.length ? visible : cards;
    }

    function showSlide(idx) {
      currentIdx = (idx + activePool.length) % activePool.length;
      var card = activePool[currentIdx];
      imgEl.src = card.getAttribute('data-lb-src');
      imgEl.alt = card.getAttribute('data-lb-title') || 'Project Image';
      badgeEl.textContent = card.getAttribute('data-lb-badge') || 'Completed Site';
      titleEl.textContent = card.getAttribute('data-lb-title') || '';
      descEl.textContent = card.getAttribute('data-lb-desc') || '';
      var msg =
        'Hi Anbu Steel & Cement, I am interested in supplies similar to: ' +
        (card.getAttribute('data-lb-title') || 'your completed project') +
        '.';
      waEl.href = 'https://wa.me/919626325204?text=' + encodeURIComponent(msg);
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    cards.forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.closest('a.anbu-gallery-quote-link')) return;
        activePool = getVisibleCards();
        var visibleIdx = activePool.indexOf(card);
        showSlide(visibleIdx >= 0 ? visibleIdx : 0);
      });
    });

    var closeBtn = document.getElementById('lbClose');
    var prevBtn = document.getElementById('lbPrev');
    var nextBtn = document.getElementById('lbNext');

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', function () { showSlide(currentIdx - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { showSlide(currentIdx + 1); });

    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (!modal.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showSlide(currentIdx + 1);
      if (e.key === 'ArrowLeft') showSlide(currentIdx - 1);
    });
  }

  /* ── 11. CONTACT PAGE: MATERIAL CHIPS & COPY-TO-CLIPBOARD TOAST ── */
  function initContactEnhancements() {
    var chips = document.querySelectorAll('.anbu-material-chip');
    var subjectInput = document.getElementById('c_sub');

    if (chips.length && subjectInput) {
      chips.forEach(function (chip) {
        chip.addEventListener('click', function () {
          chip.classList.toggle('selected');
          var selected = [];
          chips.forEach(function (c) {
            if (c.classList.contains('selected')) {
              selected.push(c.textContent.trim());
            }
          });
          if (selected.length > 0) {
            subjectInput.value = selected.join(', ') + ' Price Quote';
          }
        });
      });
    }

    var toast = document.getElementById('anbuToast');
    function showToast(text) {
      if (!toast) return;
      toast.textContent = text;
      toast.classList.add('show');
      setTimeout(function () {
        toast.classList.remove('show');
      }, 2400);
    }

    document.querySelectorAll('[data-copy]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var value = btn.getAttribute('data-copy');
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(value).then(function () {
            showToast('Copied: ' + value);
          });
        } else {
          showToast(value);
        }
      });
    });
  }

  /* ── 12. FAQ ACCORDION ── */
  function initFAQAccordion() {
    var items = document.querySelectorAll('.anbu-faq-item');
    if (!items.length) return;

    items.forEach(function (item) {
      var trigger = item.querySelector('.anbu-faq-trigger');
      var panel = item.querySelector('.anbu-faq-panel');
      if (!trigger || !panel) return;

      if (item.classList.contains('is-open')) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }

      trigger.addEventListener('click', function () {
        var wasOpen = item.classList.contains('is-open');
        items.forEach(function (other) {
          other.classList.remove('is-open');
          var op = other.querySelector('.anbu-faq-panel');
          var ot = other.querySelector('.anbu-faq-trigger');
          if (op) op.style.maxHeight = null;
          if (ot) ot.setAttribute('aria-expanded', 'false');
        });

        if (!wasOpen) {
          item.classList.add('is-open');
          panel.style.maxHeight = panel.scrollHeight + 'px';
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* ── 13. TESTIMONIALS HORIZONTAL AUTOPLAY CAROUSEL ── */
  function initTestimonialsCarousel() {
    if (!window.jQuery || typeof window.jQuery.fn.owlCarousel === 'undefined') return;
    var $ = window.jQuery;
    var $carousel = $('.anbu-cement-testimonial-carousel');
    if (!$carousel.length) return;

    $carousel.owlCarousel({
      autoplay: true,
      autoplayTimeout: 3200,
      autoplayHoverPause: true,
      autoplaySpeed: 750,
      smartSpeed: 750,
      loop: true,
      margin: 16,
      dots: true,
      nav: true,
      navText: [
        '<i class="fas fa-arrow-left"></i>',
        '<i class="fas fa-arrow-right"></i>'
      ],
      responsive: {
        0: {
          items: 1,
          stagePadding: 18,
          margin: 14,
          nav: false
        },
        576: {
          items: 1,
          stagePadding: 44,
          margin: 16,
          nav: true
        },
        768: {
          items: 2,
          stagePadding: 0,
          margin: 20,
          nav: true
        },
        992: {
          items: 3,
          stagePadding: 0,
          margin: 24,
          nav: true
        }
      }
    });

    $carousel.on('mouseleave touchend', function () {
      $carousel.trigger('play.owl.autoplay', [3200]);
    });
  }

  function initAll() {
    initSmartNavbar();
    initNavigationHelpers();
    initScrollReveal();
    initCounters();
    initCardTilt();
    initButtonRipple();
    initFilterGroups();
    initSpecTabs();
    initBOQCalculator();
    initProjectLightbox();
    initContactEnhancements();
    initFAQAccordion();
    initTestimonialsCarousel();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
