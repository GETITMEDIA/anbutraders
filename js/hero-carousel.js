/**
 * ========================================================
 * ANBU TRADERS - 2026 PREMIUM 3-CATEGORY HERO CAROUSEL
 * ========================================================
 * Automatic 5-second carousel with:
 * - 3 Categories: Sheets & Pipes, Paints, Steels & Cement
 * - Left-to-right animated progress line in the active bottom container
 * - Hover pause / resume functionality
 * - Instant click-to-switch with timer restart
 * - Smooth crossfade transitions and background image zoom
 * ========================================================
 */

(function () {
    'use strict';

    function initHeroCarousel() {
        var carousel = document.getElementById('anbu-hero-carousel-section');
        if (!carousel) return;

        var slides = carousel.querySelectorAll('.hero-slide');
        var tabs = carousel.querySelectorAll('.hero-category-tab');
        var total = slides.length;
        if (total === 0 || tabs.length === 0) return;

        var currentIndex = 0;
        var isPaused = false;
        var currentAnimationListener = null;

        // Activate specified slide and start fresh 5s progress line
        function goToSlide(index) {
            if (index < 0 || index >= total) index = 0;
            currentIndex = index;

            // 1. Update Slides with cross-fade
            for (var i = 0; i < slides.length; i++) {
                if (i === currentIndex) {
                    slides[i].classList.add('active');
                } else {
                    slides[i].classList.remove('active');
                }
            }

            // 2. Update Tabs & Progress Line Animation
            for (var j = 0; j < tabs.length; j++) {
                var tab = tabs[j];
                var progressBar = tab.querySelector('.tab-progress-bar');
                if (j === currentIndex) {
                    tab.classList.add('active');
                    if (progressBar) {
                        // Force DOM reflow to restart CSS keyframe animation from 0%
                        progressBar.style.animation = 'none';
                        void progressBar.offsetWidth;
                        progressBar.style.animation = '';
                    }
                } else {
                    tab.classList.remove('active');
                    if (progressBar) {
                        progressBar.style.animation = 'none';
                    }
                }
            }

            // 3. Attach one-time animation completion listener to active progress line
            attachProgressEndListener();
        }

        function attachProgressEndListener() {
            var activeTab = tabs[currentIndex];
            if (!activeTab) return;
            var progressBar = activeTab.querySelector('.tab-progress-bar');
            if (!progressBar) return;

            // Detach previous listener from all tab progress bars to prevent duplicate triggers
            if (currentAnimationListener) {
                tabs.forEach(function (t) {
                    var bar = t.querySelector('.tab-progress-bar');
                    if (bar) bar.removeEventListener('animationend', currentAnimationListener);
                });
                currentAnimationListener = null;
            }

            currentAnimationListener = function (e) {
                if (e.target !== progressBar) return;
                progressBar.removeEventListener('animationend', currentAnimationListener);
                currentAnimationListener = null;

                if (!isPaused) {
                    goToSlide((currentIndex + 1) % total);
                } else {
                    // If paused, wait for mouseleave to advance cleanly
                    var resumeAdvance = function () {
                        carousel.removeEventListener('mouseleave', resumeAdvance);
                        goToSlide((currentIndex + 1) % total);
                    };
                    carousel.addEventListener('mouseleave', resumeAdvance);
                }
            };

            progressBar.addEventListener('animationend', currentAnimationListener);
        }

        // Click-to-switch interactions on bottom category containers
        tabs.forEach(function (tab) {
            tab.addEventListener('click', function (e) {
                // If the user clicked specifically on the direct link icon, let normal navigation happen
                if (e.target.closest('.tab-direct-link')) {
                    return;
                }

                var targetIdx = parseInt(this.getAttribute('data-target-index'), 10);
                if (!isNaN(targetIdx)) {
                    if (targetIdx === currentIndex) {
                        // If already active container is clicked, navigate to its page
                        var link = this.querySelector('.tab-direct-link');
                        if (link && link.href) {
                            window.location.href = link.href;
                        }
                    } else {
                        // Switch immediately and restart the 5-second timer
                        goToSlide(targetIdx);
                    }
                }
            });

            // Keyboard navigation (Enter / Space)
            tab.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });

        // Hover pause / resume functionality
        carousel.addEventListener('mouseenter', function () {
            isPaused = true;
            carousel.classList.add('is-paused');
        });

        carousel.addEventListener('mouseleave', function () {
            isPaused = false;
            carousel.classList.remove('is-paused');
        });

        // Visibility change (pause if user switches browser tab, resume on return)
        document.addEventListener('visibilitychange', function () {
            if (document.hidden) {
                isPaused = true;
                carousel.classList.add('is-paused');
            } else {
                isPaused = false;
                carousel.classList.remove('is-paused');
            }
        });

        // Initialize on first slide (Sheets & Pipes)
        goToSlide(0);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHeroCarousel);
    } else {
        initHeroCarousel();
    }
})();
