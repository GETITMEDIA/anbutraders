const fs = require('fs');

console.log('=== STANDARDIZING ALL 9 PAGES SECTION & CONTAINER MARKUP ===');

// 1. index.html
let index = fs.readFileSync('index.html', 'utf8');
index = index.replace('<div class="container-xxl pt-5 pb-2">', '<section class="about-section site-section">');
index = index.replace('        </div>\r\n    </div>\r\n</div>\r\n<!-- About End -->', '        </div>\r\n    </div>\r\n</section>\r\n<!-- About End -->');
index = index.replace('        </div>\n    </div>\n</div>\n<!-- About End -->', '        </div>\n    </div>\n</section>\n<!-- About End -->');

index = index.replace('<div class="container-xxl testimonial-section">', '<section class="testimonial-section site-section">');
index = index.replace('    </div>\r\n  </div>\r\n</div>\r\n<!-- Testimonials Section End -->', '    </div>\r\n  </div>\r\n</section>\r\n<!-- Testimonials Section End -->');
index = index.replace('    </div>\n  </div>\n</div>\n<!-- Testimonials Section End -->', '    </div>\n  </div>\n</section>\n<!-- Testimonials Section End -->');
fs.writeFileSync('index.html', index, 'utf8');
console.log('✅ index.html updated');

// 2. about.html
let about = fs.readFileSync('about.html', 'utf8');
about = about.replace('<section class="container-xxl py-5">', '<section class="about-section site-section">');
about = about.replace('<section class="py-5 bg-light">', '<section class="site-section bg-light">');
fs.writeFileSync('about.html', about, 'utf8');
console.log('✅ about.html updated');

// 3. contact.html
let contact = fs.readFileSync('contact.html', 'utf8');
contact = contact.replace('<div class="container-xxl py-5">', '<section class="contact-section site-section">');
contact = contact.replace('    </div>\r\n</div>\r\n<!-- Contact End -->', '    </div>\r\n</section>\r\n<!-- Contact End -->');
contact = contact.replace('    </div>\n</div>\n<!-- Contact End -->', '    </div>\n</section>\n<!-- Contact End -->');
fs.writeFileSync('contact.html', contact, 'utf8');
console.log('✅ contact.html updated');

// 4. service.html
let service = fs.readFileSync('service.html', 'utf8');
service = service.replace('<div class="container-xxl py-5">', '<section class="service-section site-section">');
service = service.replace('    </div>\r\n</div>\r\n<!-- Service End -->', '    </div>\r\n</section>\r\n<!-- Service End -->');
service = service.replace('    </div>\n</div>\n<!-- Service End -->', '    </div>\n</section>\n<!-- Service End -->');

service = service.replace(
  '<section class="container mb-5 mt-0 wow fadeInUp" data-wow-delay="0.15s">',
  '<section class="site-section-sm wow fadeInUp" data-wow-delay="0.15s">\n        <div class="container">'
);
service = service.replace(
  '        </div>\r\n    </section>\r\n\r\n    <!-- 4-Step Process Flow -->',
  '        </div>\r\n        </div>\r\n    </section>\r\n\r\n    <!-- 4-Step Process Flow -->'
);
service = service.replace(
  '        </div>\n    </section>\n\n    <!-- 4-Step Process Flow -->',
  '        </div>\n        </div>\n    </section>\n\n    <!-- 4-Step Process Flow -->'
);

service = service.replace('<section class="container-xxl py-5 bg-light">', '<section class="process-section site-section bg-light">');
fs.writeFileSync('service.html', service, 'utf8');
console.log('✅ service.html updated');

// 5. project.html
let project = fs.readFileSync('project.html', 'utf8');
project = project.replace('<section class="container-xxl py-5">', '<section class="project-section site-section">');
fs.writeFileSync('project.html', project, 'utf8');
console.log('✅ project.html updated');

// 6. team.html
let team = fs.readFileSync('team.html', 'utf8');
team = team.replace('<section class="anbu-team-section">', '<section class="anbu-team-section site-section">');
fs.writeFileSync('team.html', team, 'utf8');
console.log('✅ team.html updated');

// 7. testimonial.html
let testimonial = fs.readFileSync('testimonial.html', 'utf8');
testimonial = testimonial.replace(
  '<section class="container my-5 wow fadeInUp" data-wow-delay="0.1s">',
  '<section class="site-section-sm wow fadeInUp" data-wow-delay="0.1s">\n    <div class="container">'
);
testimonial = testimonial.replace(
  '    </div>\r\n</section>\r\n\r\n    <!-- Testimonial Start -->',
  '    </div>\r\n    </div>\r\n</section>\r\n\r\n    <!-- Testimonial Start -->'
);
testimonial = testimonial.replace(
  '    </div>\n</section>\n\n    <!-- Testimonial Start -->',
  '    </div>\n    </div>\n</section>\n\n    <!-- Testimonial Start -->'
);
testimonial = testimonial.replace('<section class="container-xxl py-3">', '<section class="testimonial-cards-section site-section pt-0">');
fs.writeFileSync('testimonial.html', testimonial, 'utf8');
console.log('✅ testimonial.html updated');

// 8. feature.html
let feature = fs.readFileSync('feature.html', 'utf8');
feature = feature.replace('<section class="anbu-features-section">', '<section class="anbu-features-section site-section">');
fs.writeFileSync('feature.html', feature, 'utf8');
console.log('✅ feature.html updated');

// 9. 404.html
let page404 = fs.readFileSync('404.html', 'utf8');
page404 = page404.replace('<div class="container-xxl anbu-404-container">', '<section class="anbu-404-section site-section">');
page404 = page404.replace('    </div>\r\n</div>\r\n<!-- 404 End -->', '    </div>\r\n</section>\r\n<!-- 404 End -->');
page404 = page404.replace('    </div>\n</div>\n<!-- 404 End -->', '    </div>\n</section>\n<!-- 404 End -->');
fs.writeFileSync('404.html', page404, 'utf8');
console.log('✅ 404.html updated');

console.log('\n🎉 ALL 9 HTML FILES STANDARDIZED WITH CLEAN SEMANTIC SECTIONS!');

