const fs = require('fs');

console.log('=== PERFECTING DIV & SECTION TAG BALANCE ===');

// 1. contact.html
let contact = fs.readFileSync('contact.html', 'utf8');
contact = contact.replace(
  '        </div>\r\n    </div>\r\n    </section>\r\n    <!-- Contact Section End -->',
  '        </div>\r\n    </section>\r\n    <!-- Contact Section End -->'
);
contact = contact.replace(
  '        </div>\n    </div>\n    </section>\n    <!-- Contact Section End -->',
  '        </div>\n    </section>\n    <!-- Contact Section End -->'
);
fs.writeFileSync('contact.html', contact, 'utf8');

// 2. 404.html
let page404 = fs.readFileSync('404.html', 'utf8');
page404 = page404.replace(
  '            </div>\r\n        </div>\r\n    </div>\r\n    </section>\r\n\r\n    <!-- Curved Transition to Footer -->',
  '            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <!-- Curved Transition to Footer -->'
);
page404 = page404.replace(
  '            </div>\n        </div>\n    </div>\n    </section>\n\n    <!-- Curved Transition to Footer -->',
  '            </div>\n        </div>\n    </section>\n\n    <!-- Curved Transition to Footer -->'
);
fs.writeFileSync('404.html', page404, 'utf8');

// 3. service.html
let service = fs.readFileSync('service.html', 'utf8');
service = service.replace(
  '            </div>\r\n        </div>\r\n    </div>\r\n    </section>\r\n    <!-- Service End -->',
  '            </div>\r\n        </div>\r\n    </section>\r\n    <!-- Service End -->'
);
service = service.replace(
  '            </div>\n        </div>\n    </div>\n    </section>\n    <!-- Service End -->',
  '            </div>\n        </div>\n    </section>\n    <!-- Service End -->'
);
service = service.replace(
  '            </div>\r\n        </div>\r\n        </div>\r\n    </section>\r\n\r\n    <!-- 4-Step Process Flow -->',
  '            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <!-- 4-Step Process Flow -->'
);
service = service.replace(
  '            </div>\n        </div>\n        </div>\n    </section>\n\n    <!-- 4-Step Process Flow -->',
  '            </div>\n        </div>\n    </section>\n\n    <!-- 4-Step Process Flow -->'
);
fs.writeFileSync('service.html', service, 'utf8');

console.log('✅ Balance updated.');

