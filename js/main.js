(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show').css('display', 'none');
        }
    };
    spinner();

    // Dynamic Copyright Year
    var currentYear = new Date().getFullYear();
    $('.current-year, #current-year').text(currentYear);

    
    
    // Initiate the wowjs
    if (typeof WOW !== 'undefined') {
        new WOW({
            offset: 80,
            mobile: false
        }).init();
    }


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video (defensive)
    var $videoSrc;
    if ($('.btn-play').length > 0) {
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
    }
    if ($('#videoModal').length > 0) {
        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&modestbranding=1&showinfo=0");
        });
        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        });
    }


    // Facts counter (defensive)
    if ($('[data-toggle="counter-up"]').length > 0 && typeof $.fn.counterUp !== 'undefined') {
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000
        });
    }


    // Project carousel (defensive)
    if ($(".project-carousel").length > 0 && typeof $.fn.owlCarousel !== 'undefined') {
        $(".project-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            loop: true,
            center: true,
            dots: false,
            nav: true,
            navText : [
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
            ],
            responsive: {
                0:{
                    items:2
                },
                576:{
                    items:2
                },
                768:{
                    items:3
                },
                992:{
                    items:4
                },
                1200:{
                    items:5
                }
            }
        });
    }


    // Testimonials carousel (defensive with robust autoplay & Read More toggle)
    if ($(".testimonial-carousel").length > 0 && typeof $.fn.owlCarousel !== 'undefined') {
        var $testimonialCarousel = $(".testimonial-carousel");
        $testimonialCarousel.owlCarousel({
            autoplay: true,
            autoplayTimeout: 3500,
            autoplayHoverPause: true,
            autoplaySpeed: 800,
            smartSpeed: 800,
            center: false,
            dots: true,
            loop: true,
            margin: 25,
            nav : true,
            navText : [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsive: {
                0:{
                    items: 1,
                    margin: 15
                },
                768:{
                    items: 2,
                    margin: 20
                },
                992:{
                    items: 3,
                    margin: 25
                }
            }
        });

        // Ensure autoplay continues when mouse leaves or touch ends
        $testimonialCarousel.on('mouseleave touchend', function() {
            $testimonialCarousel.trigger('play.owl.autoplay', [3500]);
        });

        // Testimonial Read More / Read Less toggle
        $(document).on('click', '.testimonial-toggle-btn', function(e) {
            e.preventDefault();
            var $btn = $(this);
            var $quote = $btn.siblings('.testimonial-quote');
            var isCollapsed = $quote.hasClass('is-collapsed');

            if (isCollapsed) {
                $quote.removeClass('is-collapsed');
                $btn.attr('aria-expanded', 'true');
                $btn.find('.btn-text').text('Read Less');
                $btn.find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
            } else {
                $quote.addClass('is-collapsed');
                $btn.attr('aria-expanded', 'false');
                $btn.find('.btn-text').text('Read More');
                $btn.find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            }
        });
    }

    
})(jQuery);

// Our business tabs (defensive)
(function() {
    var tabs = document.querySelectorAll('.tab');
    var contents = document.querySelectorAll('.tab-content');

    if (tabs.length > 0 && contents.length > 0) {
        tabs.forEach(function(tab) {
            tab.addEventListener('click', function() {
                tabs.forEach(function(t) { t.classList.remove('active'); });
                contents.forEach(function(c) { c.classList.remove('active'); });
                tab.classList.add('active');
                var targetEl = document.getElementById(tab.dataset.tab);
                if (targetEl) {
                    targetEl.classList.add('active');
                }
            });
        });
    }
})();

// Brand scroll arrows (defensive)
(function() {
    var brandWrapper = document.querySelector('.brand-logos-wrapper');
    var leftArrow = document.querySelector('.arrow.left');
    var rightArrow = document.querySelector('.arrow.right');
    var scrollAmount = 300;

    if (brandWrapper && leftArrow && rightArrow) {
        leftArrow.addEventListener('click', function() {
            brandWrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
        rightArrow.addEventListener('click', function() {
            brandWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }
})();

// Google Review redirect (global)
function redirectToGoogleReview() {
    var googleReviewLink = 'https://www.google.com/maps/place/ANBU+TRADERS+-+PIPES+AND+SHEETS/@12.002837,79.762673,391m/data=!3m1!1e3!4m8!3m7!1s0x3a53670027dfb5a9:0x7a2309fe84b1a2d0!8m2!3d12.0022224!4d79.7647595!9m1!1b1!16s%2Fg%2F11l_954p8h?hl=en&entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D';
    window.open(googleReviewLink, '_blank');
}

// Viewport reveal animation using IntersectionObserver
(function() {
    if ('IntersectionObserver' in window) {
        var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        var revealObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.product, .brand-card').forEach(function(el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1)';
            revealObserver.observe(el);
        });

        // Add revealed style
        var style = document.createElement('style');
        style.textContent = '.product.revealed, .brand-card.revealed { opacity: 1 !important; transform: translateY(0) !important; }';
        document.head.appendChild(style);
    }
})();

// Automatic Dynamic Active Nav-Link Highlighter
(function () {
    function setActiveNavLink() {
        var currentPath = window.location.pathname.split('/').pop() || 'index.html';
        currentPath = currentPath.split('?')[0].split('#')[0].toLowerCase();
        if (!currentPath || currentPath === '') currentPath = 'index.html';

        var navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)');

        // First remove active from all
        navLinks.forEach(function (link) {
            link.classList.remove('active');
        });

        var matched = false;

        navLinks.forEach(function (link) {
            var href = link.getAttribute('href');
            if (!href) return;

            // Skip internal anchor/section links like index.html#products
            if (href.indexOf('#') !== -1) return;

            var linkFile = href.split('/').pop().split('?')[0].toLowerCase();

            if (linkFile && linkFile === currentPath && !matched) {
                link.classList.add('active');
                matched = true;
            }
        });

        // Default to Home if root or index.html and no other match
        if (!matched && (currentPath === 'index.html' || currentPath === '')) {
            var homeLink = document.querySelector('.navbar-nav a[href="index.html"], .navbar-nav a[href="./index.html"]');
            if (homeLink) homeLink.classList.add('active');
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setActiveNavLink);
    } else {
        setActiveNavLink();
    }
})();
