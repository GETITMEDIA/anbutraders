(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
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


    // Testimonials carousel (defensive)
    if ($(".testimonial-carousel").length > 0 && typeof $.fn.owlCarousel !== 'undefined') {
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            center: true,
            dots: false,
            loop: true,
            nav : true,
            navText : [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsive: {
                0:{
                    items:1
                },
                768:{
                    items:2
                }
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
