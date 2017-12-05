const path = require('path');

module.exports = app => {
  // GET Requests
  app.get('/', require(path.join(process.cwd(), 'controllers/get/index.js')));
  app.get('/users', require(path.join(process.cwd(), 'controllers/get/users.js')))

  // 404 Not Found
  app.get('*', require(path.join(process.cwd(), 'controllers/get/404.js')));
}