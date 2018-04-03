const path = require('path');
const models = require(path.join(process.cwd(), '/models'));

module.exports = (req, res) => {
  return res.render('index');
}