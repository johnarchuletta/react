const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('./database.config.js');
const basename = path.basename(module.filename);
const db = {};

const sequelize = new Sequelize(
  process.env.DB_DATABASE || config.database,
  process.env.DB_USERNAME || config.username,
  process.env.DB_PASSWORD || config.password,
  config.options
);

fs
  .readdirSync(path.join(process.cwd(), 'models'))
  .forEach(dir => {
    const model = sequelize.import(path.join(process.cwd(), 'models/' + dir + '/index.js'));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if(db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;