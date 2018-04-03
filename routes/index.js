const path = require('path');

module.exports = app => {
  // GET requests
  app.get('/', require(path.join(process.cwd(), 'controllers/get/index.js')));
  app.get('/users', require(path.join(process.cwd(), 'controllers/get/users.js')));
  
  // POST requests
  app.post('/users', require(path.join(process.cwd(), 'controllers/post/users.js')));

  // 404
  app.get('*', require(path.join(process.cwd(), 'controllers/get/404.js')));
}