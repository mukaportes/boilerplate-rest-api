const winston = require('winston');
const config = require('../app/config');

/*
error: 0
warn: 1
info: 2
http: 3
verbose: 4
debug: 5
silly: 6
*/

const logger = winston.createLogger({
  exceptionHandlers: [
    new winston.transports.Console({
      format: winston.format.json(),
    }),
  ],
  level: config.logLevel,
  transports: [
    new winston.transports.Console({
      format: winston.format.json(),
    }),
  ],
});

module.exports = logger;