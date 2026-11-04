const fs = require('fs');

const contactHtml = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Contact Us - Anbu Traders | Sedarapet &amp; Kootroad Yards Pondicherry</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Contact Anbu Traders in Pondicherry. Visit our specialized yards in Sedarapet (Sheets & Pipes) and Thiruchitrambalam Kootroad (Steel & Cement). Call +91 96263 25204 for instant wholesale quotes.">
    <meta name="keywords" content="Contact Anbu Traders, steel yard Sedarapet, cement shop Thiruchitrambalam, Pondicherry building materials phone, wholesale quote">

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
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
                    <div class="dropdown-menu bg-light m-0 shadow-sm">
                        <a href="project.html" class="dropdown-item">Projects</a>
                        <a href="feature.html" class="dropdown-item">Why Choose Us</a>
                        <a href="team.html" class="dropdown-item">Our Organization</a>
                        <a href="testimonial.html" class="dropdown-item">Client Reviews</a>
                    </div>
                </div>
                <a href="contact.html" class="nav-item nav-link active">Contact</a>
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
                MULTI-YARD DIRECTORY &amp; INSTANT QUOTES
            </span>
            <h1 class="hero-title-main">Contact Our Yards &amp; Showrooms</h1>
            <p class="hero-subtitle-lead">
                Visit our specialized stocking yards in Sedarapet and Thiruchitrambalam Kootroad, or connect directly with our dispatch desk for immediate material quotes, mill certificates, and delivery scheduling.
            </p>
            <ul class="hero-breadcrumb-trail">
                <li><a href="index.html">Home</a></li>
                <li class="sep"><i class="fa fa-chevron-right fa-xs"></i></li>
                <li class="current">Contact Us</li>
            </ul>
        </div>
    </section>

    <!-- Contact Section Start -->
    <div class="container-xxl py-5">
        <div class="container">

            <!-- 1. Quick Info Bar (Call, Email, WhatsApp) -->
            <div class="row g-4 mb-5">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="card h-100 border p-4 rounded-4 shadow-sm bg-white d-flex flex-row align-items-center gap-3">
                        <div class="btn btn-primary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 56px; height: 56px;">
                            <i class="fa fa-phone-alt fs-5"></i>
                        </div>
                        <div>
                            <p class="text-muted small mb-1">Direct Call Support</p>
                            <h5 class="fw-bold mb-1"><a href="tel:+919626325204" class="text-navy text-decoration-none">+91 96263 25204</a></h5>
                            <span class="text-secondary small"><a href="tel:+919655551468" class="text-muted text-decoration-none">+91 96555 51468</a></span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="card h-100 border p-4 rounded-4 shadow-sm bg-white d-flex flex-row align-items-center gap-3">
                        <div class="btn btn-primary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 56px; height: 56px;">
                            <i class="fa fa-envelope-open fs-5"></i>
                        </div>
                        <div>
                            <p class="text-muted small mb-1">Official Email Desk</p>
                            <h5 class="fw-bold mb-1"><a href="mailto:anbutraders1468@gmail.com" class="text-navy text-decoration-none" style="font-size: 1rem;">anbutraders1468@gmail.com</a></h5>
                            <span class="text-secondary small">Fast quotation responses</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="card h-100 border p-4 rounded-4 shadow-sm bg-white d-flex flex-row align-items-center gap-3">
                        <div class="btn btn-success rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 56px; height: 56px;">
                            <i class="fab fa-whatsapp fs-5"></i>
                        </div>
                        <div>
                            <p class="text-muted small mb-1">WhatsApp Fast Quotes</p>
                            <h5 class="fw-bold mb-1"><a href="https://wa.me/9626325204?text=Hello%20Anbu%20Traders,%20I%20have%20an%20enquiry" class="text-success text-decoration-none" target="_blank">+91 96263 25204</a></h5>
                            <span class="text-secondary small">Real-time daily rates &amp; availability</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2. Three Business Division Branches -->
            <div class="mb-5">
                <div class="text-center mb-4 wow fadeInUp" data-wow-delay="0.1s">
                    <span class="hero-badge-pill" style="color: var(--primary-orange); border-color: rgba(243, 106, 33, 0.3); background: rgba(243, 106, 33, 0.08);">
                        OUR WAREHOUSES &amp; FACILITIES
                    </span>
                    <h2 class="display-6 fw-bold text-navy mt-2">Visit Our Specialized Locations</h2>
                </div>

                <div class="row g-4">
                    <!-- Branch 1: Sheet & Pipe -->
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="card h-100 border rounded-4 overflow-hidden shadow-sm bg-white d-flex flex-column">
                            <div class="p-3 bg-light border-bottom d-flex justify-content-between align-items-center">
                                <span class="badge bg-primary px-3 py-2"><i class="fa fa-layer-group me-1"></i> Sheets &amp; Pipes</span>
                                <span class="text-muted small"><i class="fa fa-warehouse text-primary me-1"></i> Yard 1</span>
                            </div>
                            <div class="p-4 flex-grow-1">
                                <h4 class="h5 fw-bold text-navy mb-1">Anbu Traders</h4>
                                <div class="text-primary fw-bold small text-uppercase mb-3">Sheets &bull; Pipes &bull; Roofing Center</div>
                                <p class="text-secondary small mb-3">
                                    <i class="fa fa-map-marker-alt text-primary me-2"></i>
                                    No. 76/3, Pondy - Mailam Main Road, Next to Sri Sathya Saw Mill, Sedarapet, Puducherry 605111
                                </p>
                                <div class="d-flex flex-column gap-1 mb-3">
                                    <a class="text-navy text-decoration-none small fw-semibold" href="tel:+919626325204"><i class="fa fa-phone-alt text-primary me-2"></i>+91 96263 25204</a>
                                    <a class="text-navy text-decoration-none small fw-semibold" href="tel:+919655551468"><i class="fa fa-phone-alt text-primary me-2"></i>+91 96555 51468</a>
                                </div>
                            </div>
                            <div class="p-3 bg-light border-top d-flex gap-2">
                                <a class="btn btn-outline-primary btn-sm flex-grow-1" href="tel:+919626325204"><i class="fa fa-phone-alt me-1"></i> Call</a>
                                <a class="btn btn-primary btn-sm flex-grow-1" href="https://maps.app.goo.gl/NRr4yAn8EpVjEPzx5" target="_blank"><i class="fa fa-directions me-1"></i> Directions</a>
                            </div>
                        </div>
                    </div>

                    <!-- Branch 2: Steel, Cement & AAC Blocks -->
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="card h-100 border rounded-4 overflow-hidden shadow-sm bg-white d-flex flex-column">
                            <div class="p-3 bg-light border-bottom d-flex justify-content-between align-items-center">
                                <span class="badge bg-success px-3 py-2"><i class="fa fa-cubes me-1"></i> Steel &amp; Cement</span>
                                <span class="text-muted small"><i class="fa fa-warehouse text-success me-1"></i> Yard 2</span>
                            </div>
                            <div class="p-4 flex-grow-1">
                                <h4 class="h5 fw-bold text-navy mb-1">Anbu Traders</h4>
                                <div class="text-success fw-bold small text-uppercase mb-3">Steel &bull; Cement &bull; AAC Blocks</div>
                                <p class="text-secondary small mb-3">
                                    <i class="fa fa-map-marker-alt text-success me-2"></i>
                                    No. 4/5, Pondy – Mailam Main Road, Near Venkateswara Weighment, Thiruchitrambalam Kootroad, Vanur Taluk, Villupuram Dt. – 605111
                                </p>
                                <div class="d-flex flex-column gap-1 mb-3">
                                    <a class="text-navy text-decoration-none small fw-semibold" href="tel:+919626325204"><i class="fa fa-phone-alt text-success me-2"></i>+91 96263 25204</a>
                                    <a class="text-navy text-decoration-none small fw-semibold" href="tel:+919994011468"><i class="fa fa-phone-alt text-success me-2"></i>+91 99940 11468</a>
                                </div>
                            </div>
                            <div class="p-3 bg-light border-top d-flex gap-2">
                                <a class="btn btn-outline-success btn-sm flex-grow-1" href="tel:+919626325204"><i class="fa fa-phone-alt me-1"></i> Call</a>
                                <a class="btn btn-success btn-sm flex-grow-1" href="https://maps.app.goo.gl/CQ1JGMoyDYjYzMpUA" target="_blank"><i class="fa fa-directions me-1"></i> Directions</a>
                            </div>
                        </div>
                    </div>

                    <!-- Branch 3: Paints Division Showroom -->
                    <div class="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="card h-100 border rounded-4 overflow-hidden shadow-sm bg-white d-flex flex-column">
                            <div class="p-3 bg-light border-bottom d-flex justify-content-between align-items-center">
                                <span class="badge bg-warning text-dark px-3 py-2"><i class="fa fa-palette me-1"></i> Paints Showroom</span>
                                <span class="text-muted small"><i class="fa fa-store text-warning me-1"></i> Flagship</span>
                            </div>
                            <div class="p-4 flex-grow-1">
                                <h4 class="h5 fw-bold text-navy mb-1">Anbu Paints</h4>
                                <div class="text-primary fw-bold small text-uppercase mb-3">Asian Paints &bull; JSW &bull; Berger Center</div>
                                <p class="text-secondary small mb-3">
                                    <i class="fa fa-map-marker-alt text-primary me-2"></i>
                                    Pondy - Mailam Main Road, Next to Anbu Traders Yard 1, Sedarapet, Tamil Nadu 605111
                                </p>
                                <div class="d-flex flex-column gap-1 mb-3">
                                    <a class="text-navy text-decoration-none small fw-semibold" href="tel:+919626325204"><i class="fa fa-phone-alt text-primary me-2"></i>+91 96263 25204</a>
                                    <a class="text-navy text-decoration-none small fw-semibold" href="tel:04132980014"><i class="fa fa-phone-alt text-primary me-2"></i>0413 - 2980014</a>
                                </div>
                            </div>
                            <div class="p-3 bg-light border-top d-flex gap-2">
                                <a class="btn btn-outline-warning text-dark btn-sm flex-grow-1" href="tel:+919626325204"><i class="fa fa-phone-alt me-1"></i> Call</a>
                                <a class="btn btn-warning text-dark btn-sm flex-grow-1" href="https://maps.app.goo.gl/NRr4yAn8EpVjEPzx5" target="_blank"><i class="fa fa-directions me-1"></i> Directions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. Interactive Contact Form & Live Map Embed -->
            <div class="row g-5 align-items-stretch mb-5">
                <!-- Form Column -->
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="p-4 p-md-5 bg-white border rounded-4 shadow-sm h-100">
                        <span class="hero-badge-pill" style="color: var(--primary-orange); border-color: rgba(243, 106, 33, 0.3); background: rgba(243, 106, 33, 0.08);">
                            DIRECT ENQUIRY FORM
                        </span>
                        <h3 class="h4 fw-bold text-navy mt-2 mb-3">Request a Wholesale Quote</h3>
                        <p class="text-muted small mb-4">Submit your site requirements and our sales desk will respond within 30 minutes with calibrated rates.</p>

                        <form id="anbu-quote-form" onsubmit="event.preventDefault(); window.open('https://wa.me/9626325204?text=' + encodeURIComponent('Quote Request: ' + document.getElementById('quote-name').value + ' | Phone: ' + document.getElementById('quote-phone').value + ' | Material: ' + document.getElementById('quote-material').value + ' | Quantity: ' + document.getElementById('quote-quantity').value + ' | Location: ' + document.getElementById('quote-location').value), '_blank');">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label class="form-label small fw-bold text-navy">Your Name *</label>
                                    <input type="text" id="quote-name" class="form-control" placeholder="Enter Full Name" required>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label small fw-bold text-navy">Mobile Number *</label>
                                    <input type="tel" id="quote-phone" class="form-control" placeholder="+91 98765 43210" required>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label small fw-bold text-navy">Material Required *</label>
                                    <select id="quote-material" class="form-select" required>
                                        <option value="TMT Steel Rebars">TMT Steel Rebars (Tata / JSW / Agni)</option>
                                        <option value="Cements">Cements (UltraTech / Dalmia / Ramco)</option>
                                        <option value="Roofing Sheets">Color Roofing Sheets (JSW Pragati)</option>
                                        <option value="Hollow Sections & Pipes">MS Tubes &amp; Pipes (APL Apollo)</option>
                                        <option value="Paints & Coatings">Paints (Asian Paints / JSW / Berger)</option>
                                        <option value="AAC Blocks & Accessories">AAC Blocks &amp; Wall Putty</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label small fw-bold text-navy">Approx Quantity</label>
                                    <input type="text" id="quote-quantity" class="form-control" placeholder="e.g. 5 Tons, 200 Bags">
                                </div>
                                <div class="col-12">
                                    <label class="form-label small fw-bold text-navy">Delivery Site Location *</label>
                                    <input type="text" id="quote-location" class="form-control" placeholder="e.g. Sedarapet, Lawspet, Pondy Town, Vanur" required>
                                </div>
                                <div class="col-12 pt-2">
                                    <button type="submit" class="btn btn-primary w-100 py-3 fw-bold">
                                        <i class="fab fa-whatsapp me-2"></i>Send Request via WhatsApp
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Google Map Column -->
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="border rounded-4 overflow-hidden shadow-sm h-100 position-relative" style="min-height: 420px;">
                        <iframe class="w-100 h-100 position-absolute" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15610.963499427329!2d79.7634468!3d12.0011839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53673c683b5d23%3A0xa33ec6770f905c31!2sAnbu%20Traders!5e0!3m2!1sen!2sin!4v1710400000000!5m2!1sen!2sin" frameborder="0" style="min-height: 420px; border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- Contact Section End -->

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

fs.writeFileSync('contact.html', contactHtml, 'utf8');
console.log('contact.html rebuilt successfully!');

