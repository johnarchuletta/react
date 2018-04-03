const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/database.js');
const basename = path.basename(module.filename);
const models = {};

const sequelize = new Sequelize(
  process.env.DB_DATABASE || config.database,
  process.env.DB_USERNAME || config.username,
  process.env.DB_PASSWORD || config.password,
  config.options
);

fs
.readdirSync(path.join(process.cwd(), 'models'))
.forEach(file => {
  if(file != 'index.js'){
    const model = sequelize.import(path.join(process.cwd(), '/models/' + file));
    models[model.name] = model;
  }
});

Object.keys(models).forEach(modelName => {
  if(models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;

module.exports = models;