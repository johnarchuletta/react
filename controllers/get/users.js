const path = require('path');
const db = require(path.join(process.cwd(), 'database'));

module.exports = (req, res) => {
  db.user.findAll()
    .then(users => {
      return res.json(users);
    })
}