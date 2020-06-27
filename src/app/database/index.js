const Sequelize = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  config.db,
);

module.exports = {
  sequelizeInstance: sequelize,
  queryTypes: Sequelize.QueryTypes,
};