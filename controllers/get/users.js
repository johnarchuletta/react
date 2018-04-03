const path = require('path');
const models = require(path.join(process.cwd(), '/models'));

module.exports = (req, res) => {
  models.user.findAll()

  .then(users => {
    return res.json({
      status: 'success',
      data: users
    });
  })

  .catch(err => {
    return res.status(500).json({
      status: 'error',
      data: err
    });
  });
}