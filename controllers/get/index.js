const path = require('path');
const db = require(path.join(process.cwd(), 'database'));

module.exports = (req, res) => {
  return res.render('index');
}