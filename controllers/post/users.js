const path = require('path');
const models = require(path.join(process.cwd(), '/models'));

module.exports = (req, res) => {
  console.log(req.body);
  models.user.sync({force: true})
  .then(_ => {
    models.user.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    })
    .then(user => {
      return res.json({
        status: 'success',
        data: user
      });
    })
    .catch(err => {
      return res.status(500).json({
        status: 'error',
        data: err
      });
    });
  });
}