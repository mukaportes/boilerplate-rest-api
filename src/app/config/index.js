const env = process.env.NODE_ENV || 'development';
const configFile = `./environments/${env}.js`;

const config = require(configFile);

module.exports = config;
