const fs = require('fs');

let service = fs.readFileSync('service.html', 'utf8');
service = service.replace(
  '            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <!-- 4-Step Process Flow -->',
  '            </div>\r\n        </div>\r\n        </div>\r\n    </section>\r\n\r\n    <!-- 4-Step Process Flow -->'
);
service = service.replace(
  '            </div>\n        </div>\n    </section>\n\n    <!-- 4-Step Process Flow -->',
  '            </div>\n        </div>\n        </div>\n    </section>\n\n    <!-- 4-Step Process Flow -->'
);
fs.writeFileSync('service.html', service, 'utf8');
console.log('✅ Adjusted service.html');

