const fs = require('fs');

const testimonialHtml = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Client Reviews &amp; Testimonials - Anbu Traders | 4.9★ Google Verified</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Read real reviews from civil contractors, architects, and home builders who rely on Anbu Traders in Pondicherry and Tamil Nadu for steel, cement, roofing sheets, and pipes.">
    <meta name="keywords" content="Anbu Traders reviews, customer feedback steel Pondicherry, cement dealer ratings, Google reviews Anbu Traders">

    <!-- Favicon -->
    <link rel="icon" type="image/png" sizes="32x32" href="img/icon.png">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="lib/animate/animate.min.css" rel="stylesheet">
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="css/style.css" rel="stylesheet">
    <link href="css/brand-flex-carousel.css" rel="stylesheet">
</head>

<body>

    <!-- Topbar Start -->
    <div class="container-fluid bg-dark px-0">
        <div class="row g-0 d-none d-lg-flex">
            <div class="col-lg-6 ps-5 text-start">
                <div class="h-100 d-inline-flex align-items-center text-white">
                    <span>Follow Us:</span>
                    <a class="btn btn-link text-light" href="https://www.facebook.com/people/Anbu-Traders-Pondy/61574478773419/" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-link text-light" href="https://www.youtube.com/@anbutraders1353" target="_blank" rel="noopener"><i class="fab fa-youtube"></i></a>
                    <a class="btn btn-link text-light" href="https://www.instagram.com/anbutraders_?igsh=MWY1cGtmOWFhejIyZA%3D%3D&utm_source=qr" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="col-lg-6 text-end">
                <div class="h-100 topbar-right d-inline-flex align-items-center text-white py-2 px-5">
                    <a href="tel:+919626325204" class="topbar-call-link d-inline-flex align-items-center text-white text-decoration-none fw-bold fs-5" title="Click to Call Anbu Traders directly">
                        <i class="fa fa-phone-alt me-2 text-white"></i>
                        <span>Call Us: +91 96263 25204</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->

    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top py-0 pe-5">
        <a href="index.html" class="navbar-brand ps-5 me-0 d-flex align-items-center">
            <img id="anbu-navbar-logo" src="img/ANUBU STEEL.png" alt="Anbu Traders Logo" style="height: 90px;width: 90px;">
        </a>
        
        <div class="d-flex align-items-center ms-auto me-2 d-lg-none gap-2">
            <a href="tel:+919626325204" class="btn btn-primary btn-sm rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;" title="Call +91 96263 25204" aria-label="Call Now">
                <i class="fa fa-phone-alt text-white"></i>
            </a>
        </div>
        <button type="button" class="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="index.html" class="nav-item nav-link">Home</a>
                <a href="about.html" class="nav-item nav-link">About</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Businesses</a>
                    <div class="dropdown-menu bg-light m-0 shadow-sm">
                        <a href="./a-steel/index.html" class="dropdown-item">Sheets and Pipes</a>
                        <a href="./anbu-paint/index.html" class="dropdown-item">Paints</a>
                        <a href="cement/anbucement/index-demo-3.html" class="dropdown-item">Steels &amp; Cement</a>
                    </div>
                </div>
                <a href="index.html#products" class="nav-item nav-link">Products</a>
                <a href="service.html" class="nav-item nav-link">Services</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle active" data-bs-toggle="dropdown">More</a>
                    <div class="dropdown-menu bg-light m-0 shadow-sm">
                        <a href="project.html" class="dropdown-item">Projects</a>
                        <a href="feature.html" class="dropdown-item">Why Choose Us</a>
                        <a href="team.html" class="dropdown-item">Our Organization</a>
                        <a href="testimonial.html" class="dropdown-item active">Client Reviews</a>
                    </div>
                </div>
                <a href="contact.html" class="nav-item nav-link">Contact</a>
                <a href="tel:+919626325204" class="nav-item nav-link d-lg-none text-brand-orange fw-bold">
                    <i class="fa fa-phone-alt me-2"></i>Call: +91 96263 25204
                </a>
            </div>
            <div class="d-none d-lg-flex align-items-center gap-2">
                <a href="tel:+919626325204" class="btn btn-call-nav" title="Call Anbu Traders directly">
                    <i class="fa fa-phone-alt"></i>
                    <span>+91 96263 25204</span>
                </a>
                <a href="https://wa.me/9626325204?text=Hello, I would like to enquire about your cement, steel, and pipes prices and availability." class="btn btn-primary btn-glow btn-ripple px-4 py-2" target="_blank" rel="noopener">
                    Enquiry
                </a>
            </div>
        </div>
    </nav>
    <!-- Navbar End -->

    <!-- Page Hero Banner -->
    <section class="anbu-page-hero">
        <div class="container">
            <span class="hero-badge-pill">
                <span class="pulse-dot"></span>
                GOOGLE VERIFIED 4.9★ RATING
            </span>
            <h1 class="hero-title-main">Client Reviews &amp; Testimonials</h1>
            <p class="hero-subtitle-lead">
                Read direct reviews from verified civil contractors, structural engineers, architects, and private home builders across Pondicherry and Tamil Nadu who rely on Anbu Traders for every major pour and erection.
            </p>
            <ul class="hero-breadcrumb-trail">
                <li><a href="index.html">Home</a></li>
                <li class="sep"><i class="fa fa-chevron-right fa-xs"></i></li>
                <li class="current">Client Reviews</li>
            </ul>
        </div>
    </section>

    <!-- Rating Summary Banner -->
    <section class="container mb-5">
        <div class="p-4 p-md-5 bg-white border rounded-4 shadow-sm">
            <div class="row align-items-center g-4">
                <div class="col-lg-7">
                    <div class="d-flex align-items-center gap-3 mb-2">
                        <span class="display-5 fw-bold text-navy">4.9</span>
                        <div>
                            <div class="text-warning fs-5">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <span class="text-muted small fw-semibold">Based on 500+ Verified Client Engagements</span>
                        </div>
                    </div>
                    <p class="text-secondary mb-0">Certified by Google Maps Reviews. Our clients praise our on-time site dispatch, accurate weighbridge slips, and authentic primary mill steel origin.</p>
                </div>
                <div class="col-lg-5 text-lg-end">
                    <a href="https://maps.app.goo.gl/NRr4yAn8EpVjEPzx5" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg px-4 py-3 fw-bold">
                        <i class="fab fa-google me-2"></i>Leave a Google Review
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Reviews Bento Grid -->
    <section class="container-xxl py-3">
        <div class="container">
            <div class="anbu-testi-grid">

                <!-- Review 1 -->
                <div class="anbu-testi-card">
                    <div class="testi-card-top">
                        <div class="testi-stars-row">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </div>
                        <span class="testi-verified-badge"><i class="fa fa-check-circle"></i> Verified Contractor</span>
                    </div>
                    <p class="testi-quote-text">
                        "Anbu Steels and Cements (Vanur/Pondy) - we are fully satisfied with your material supply for the past 2 years. Consistent, high quality materials. Their sales executive explained the cement grades thoroughly and guided our site team. Excellent service!"
                    </p>
                    <div class="testi-author-meta">
                        <div class="testi-avatar-icon">MV</div>
                        <div>
                            <div class="testi-author-name">Mani Vannan</div>
                            <div class="testi-author-role">Contractor &amp; Civil Builder &bull; Vanur</div>
                        </div>
                    </div>
                </div>

                <!-- Review 2 -->
                <div class="anbu-testi-card">
                    <div class="testi-card-top">
                        <div class="testi-stars-row">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </div>
                        <span class="testi-verified-badge"><i class="fa fa-check-circle"></i> Verified Builder</span>
                    </div>
                    <p class="testi-quote-text">
                        "I strongly recommend Anbu Traders. High quality TMT steel and cement available at very reasonable wholesale rates. They deliver on time directly to site with computer weighbridge slips. Completely transparent transactions!"
                    </p>
                    <div class="testi-author-meta">
                        <div class="testi-avatar-icon">KS</div>
                        <div>
                            <div class="testi-author-name">K. Senthil Kumar</div>
                            <div class="testi-author-role">Infrastructure Developer &bull; Sedarapet</div>
                        </div>
                    </div>
                </div>

                <!-- Review 3 -->
                <div class="anbu-testi-card">
                    <div class="testi-card-top">
                        <div class="testi-stars-row">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </div>
                        <span class="testi-verified-badge"><i class="fa fa-check-circle"></i> Verified Client</span>
                    </div>
                    <p class="testi-quote-text">
                        "Purchased JSW Pragati colour coated roofing sheets and Apollo MS pipes for our factory shed extension. Prompt delivery, proper packaging, and zero transport damage. Excellent customer interaction and wholesale rate."
                    </p>
                    <div class="testi-author-meta">
                        <div class="testi-avatar-icon">RB</div>
                        <div>
                            <div class="testi-author-name">Rajeshwari Builders</div>
                            <div class="testi-author-role">Industrial Fabricator &bull; Mettupalayam</div>
                        </div>
                    </div>
                </div>

                <!-- Review 4 -->
                <div class="anbu-testi-card">
                    <div class="testi-card-top">
                        <div class="testi-stars-row">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </div>
                        <span class="testi-verified-badge"><i class="fa fa-check-circle"></i> Home Builder</span>
                    </div>
                    <p class="testi-quote-text">
                        "Built my own independent house in Pondicherry. Sourced Tata Tiscon 550D rebar and UltraTech cement from Anbu Traders. Their weighbridge slip gave complete peace of mind on weight accuracy. Highly recommended for house builders!"
                    </p>
                    <div class="testi-author-meta">
                        <div class="testi-avatar-icon">AC</div>
                        <div>
                            <div class="testi-author-name">Anand Civil Works</div>
                            <div class="testi-author-role">Private Residence &bull; Lawspet</div>
                        </div>
                    </div>
                </div>

                <!-- Review 5 -->
                <div class="anbu-testi-card">
                    <div class="testi-card-top">
                        <div class="testi-stars-row">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </div>
                        <span class="testi-verified-badge"><i class="fa fa-check-circle"></i> Verified Contractor</span>
                    </div>
                    <p class="testi-quote-text">
                        "Their Anbu Paints division in Sedarapet is top notch. Got computerized shade mixing for Asian Paints Apex Ultima on the spot. Great technical advisory on wall putty and waterproofing chemicals."
                    </p>
                    <div class="testi-author-meta">
                        <div class="testi-avatar-icon">ME</div>
                        <div>
                            <div class="testi-author-name">Murugan Engineering</div>
                            <div class="testi-author-role">Painting Contractor &bull; Pondicherry</div>
                        </div>
                    </div>
                </div>

                <!-- Review 6 -->
                <div class="anbu-testi-card">
                    <div class="testi-card-top">
                        <div class="testi-stars-row">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </div>
                        <span class="testi-verified-badge"><i class="fa fa-check-circle"></i> Site Engineer</span>
                    </div>
                    <p class="testi-quote-text">
                        "Zero-hour dispatch is what sets Anbu Traders apart. When our slab casting needed an extra 100 bags of 53-grade cement on short notice, their truck delivered within two hours. Superb logistical reliability."
                    </p>
                    <div class="testi-author-meta">
                        <div class="testi-avatar-icon">KS</div>
                        <div>
                            <div class="testi-author-name">Karthik S.</div>
                            <div class="testi-author-role">Site Supervisor &bull; Villupuram</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Direct Contact CTA Banner -->
    <section class="container my-5">
        <div class="p-5 rounded-4 text-white text-center shadow-lg position-relative overflow-hidden" style="background: linear-gradient(135deg, var(--primary-navy) 0%, #031836 100%);">
            <h2 class="display-6 fw-bold mb-3 text-white">Join 1 Lakh+ Satisfied Clients Today</h2>
            <p class="lead mb-4 text-light mx-auto" style="max-width: 650px;">
                Get in touch with our team for daily spot prices, mill test certificates, and immediate delivery booking.
            </p>
            <div class="d-flex flex-wrap justify-content-center gap-3">
                <a href="tel:+919626325204" class="btn btn-primary btn-lg px-4 py-3 fw-bold">
                    <i class="fa fa-phone-alt me-2"></i>Call: +91 96263 25204
                </a>
                <a href="https://wa.me/9626325204?text=Hello%20Anbu%20Traders,%20I%20would%20like%20to%20enquire%20about%20materials." class="btn btn-success btn-lg px-4 py-3 fw-bold" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-whatsapp me-2"></i>WhatsApp Rate Enquiry
                </a>
            </div>
        </div>
    </section>

    <!-- Unified Footer Start -->
    <footer class="anbu-unified-footer">
        <div class="anbu-footer-container">
            <div class="anbu-footer-grid">
                <!-- Brand Column -->
                <div class="anbu-footer-col anbu-footer-brand-col">
                    <a href="index.html" class="anbu-footer-logo-badge logo-main-site" aria-label="Anbu Traders Logo">
                        <img src="img/ANUBU STEEL.png" alt="Anbu Traders Logo" class="anbu-footer-logo-img logo-main-padded" loading="lazy">
                    </a>
                    <p class="anbu-footer-brand-desc">Puducherry &amp; Tamil Nadu's trusted wholesale &amp; retail partner for Steel, Cement, Roofing Sheets, Pipes &amp; Paints.</p>
                    <div class="anbu-footer-socials">
                        <a class="anbu-footer-social-link" href="https://www.instagram.com/anbutraders_?igsh=MWY1cGtmOWFhejIyZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a class="anbu-footer-social-link" href="https://www.facebook.com/people/Anbu-Traders-Pondy/61574478773419/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="anbu-footer-social-link" href="https://www.youtube.com/@anbutraders1353" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>

                <!-- Office Column -->
                <div class="anbu-footer-col">
                    <h5 class="anbu-footer-title">Our Office</h5>
                    <div class="anbu-footer-info-item">
                        <span class="anbu-footer-icon"><i class="fa fa-map-marker-alt"></i></span>
                        <span>No.76/3, Pondy - Mailam Main Road, Sedarapet, Tamil Nadu 605111</span>
                    </div>
                    <div class="anbu-footer-info-item">
                        <span class="anbu-footer-icon"><i class="fa fa-phone-alt"></i></span>
                        <span><a href="tel:+919626325204">+91 96263 25204</a> / <a href="tel:+919655551468">+91 96555 51468</a></span>
                    </div>
                    <div class="anbu-footer-info-item">
                        <span class="anbu-footer-icon"><i class="fa fa-envelope"></i></span>
                        <span><a href="mailto:anbutraders1468@gmail.com">anbutraders1468@gmail.com</a></span>
                    </div>
                </div>

                <!-- Quick Links Column -->
                <div class="anbu-footer-col">
                    <h5 class="anbu-footer-title">Quick Links</h5>
                    <div class="anbu-footer-links">
                        <a class="anbu-footer-link" href="about.html">About Us</a>
                        <a class="anbu-footer-link" href="contact.html">Contact Us</a>
                        <a class="anbu-footer-link" href="service.html">Our Services</a>
                        <a class="anbu-footer-link" href="project.html">Projects</a>
                        <a class="anbu-footer-link" href="feature.html">Why Choose Us</a>
                        <a class="anbu-footer-link" href="testimonial.html">Client Reviews</a>
                    </div>
                </div>

                <!-- Business Hours Column -->
                <div class="anbu-footer-col">
                    <h5 class="anbu-footer-title">Business Hours</h5>
                    <p class="anbu-footer-hours-day">Monday - Saturday</p>
                    <p class="anbu-footer-hours-time">08:00 am - 08:00 pm</p>
                    <p class="anbu-footer-hours-day">Sunday</p>
                    <p class="anbu-footer-hours-time" style="margin-bottom: 0 !important;">08:00 am - 02:30 pm</p>
                </div>

                <!-- Google Review Column -->
                <div class="anbu-footer-col">
                    <h5 class="anbu-footer-title">Leave a Review</h5>
                    <p class="anbu-footer-review-text">We value your feedback! Rate your experience with Anbu Traders on Google.</p>
                    <a href="https://maps.app.goo.gl/NRr4yAn8EpVjEPzx5" target="_blank" rel="noopener noreferrer" class="anbu-footer-review-cta">
                        <i class="fab fa-google me-2"></i>Review on Google
                    </a>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer End -->

    <!-- Copyright Start -->
    <div class="anbu-unified-copyright">
        <div class="anbu-footer-container">
            <div class="anbu-copyright-inner">
                <p>Copyright &copy; 2026 <a class="anbu-copyright-highlight" href="index.html">Anbu Traders</a>. All Rights Reserved.</p>
                <p>Leading Construction Materials Stockist in Puducherry &amp; Tamil Nadu</p>
            </div>
        </div>
    </div>
    <!-- Copyright End -->

    <!-- Floating WhatsApp Action -->
    <div class="floating-actions">
        <a href="https://wa.me/9626325204?text=Hello%20Anbu%20Traders,%20I%20would%20like%20to%20enquire%20about%20your%20products." class="floating-btn floating-whatsapp" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" aria-label="WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>
    </div>

    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top" aria-label="Back to Top"><i class="bi bi-arrow-up"></i></a>

    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>

    <!-- Template Javascript & 2026 Interaction Engine -->
    <script src="js/anbu-interactions.js"></script>
    <script src="js/main.js"></script>
</body>

</html>
`;

fs.writeFileSync('testimonial.html', testimonialHtml, 'utf8');
console.log('testimonial.html rebuilt successfully!');

