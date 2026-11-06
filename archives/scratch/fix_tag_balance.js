const fs = require('fs');

console.log('=== FIXING TAG BALANCE IN CONTACT, SERVICE, 404, TESTIMONIAL ===');

// 1. contact.html
let contact = fs.readFileSync('contact.html', 'utf8');
contact = contact.replace(
  '        </div>\r\n    </div>\r\n    <!-- Contact Section End -->',
  '        </div>\r\n    </div>\r\n    </section>\r\n    <!-- Contact Section End -->'
);
contact = contact.replace(
  '        </div>\n    </div>\n    <!-- Contact Section End -->',
  '        </div>\n    </div>\n    </section>\n    <!-- Contact Section End -->'
);
fs.writeFileSync('contact.html', contact, 'utf8');
console.log('✅ Fixed contact.html');

// 2. 404.html
let page404 = fs.readFileSync('404.html', 'utf8');
page404 = page404.replace(
  '            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Curved Transition to Footer -->',
  '            </div>\r\n        </div>\r\n    </div>\r\n    </section>\r\n\r\n    <!-- Curved Transition to Footer -->'
);
page404 = page404.replace(
  '            </div>\n        </div>\n    </div>\n\n    <!-- Curved Transition to Footer -->',
  '            </div>\n        </div>\n    </div>\n    </section>\n\n    <!-- Curved Transition to Footer -->'
);
fs.writeFileSync('404.html', page404, 'utf8');
console.log('✅ Fixed 404.html');

// 3. service.html
let service = fs.readFileSync('service.html', 'utf8');
service = service.replace(
  '            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Service End -->',
  '            </div>\r\n        </div>\r\n    </div>\r\n    </section>\r\n    <!-- Service End -->'
);
service = service.replace(
  '            </div>\n        </div>\n    </div>\n    <!-- Service End -->',
  '            </div>\n        </div>\n    </div>\n    </section>\n    <!-- Service End -->'
);
fs.writeFileSync('service.html', service, 'utf8');
console.log('✅ Fixed service.html');

// 4. testimonial.html
let testimonial = fs.readFileSync('testimonial.html', 'utf8');
testimonial = testimonial.replace(
  '                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <!-- Reviews Bento Grid -->',
  '                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </section>\r\n\r\n    <!-- Reviews Bento Grid -->'
);
testimonial = testimonial.replace(
  '                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Reviews Bento Grid -->',
  '                </div>\n            </div>\n        </div>\n    </div>\n    </section>\n\n    <!-- Reviews Bento Grid -->'
);
fs.writeFileSync('testimonial.html', testimonial, 'utf8');
console.log('✅ Fixed testimonial.html');

