const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config');

const configDb = {
  database: config.db.database,
  dialect: config.db.dialect,
  host: config.db.host,
  password: config.db.password,
  username: config.db.username,
};

const db = {};

const sequelize = new Sequelize(
  configDb.database,
  configDb.username,
  configDb.password,
  { ...configDb, ...config.db.config },
);

fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));

    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

module.exports = { ...db, sequelize, Sequelize };
