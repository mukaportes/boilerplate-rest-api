const http = require('http');
const StringModule = require('../modules/string');

const HTTP_STATUS = Object.keys(http.STATUS_CODES).reduce((acc, statusCode) => {
  const statusCodeLabel = http.STATUS_CODES[statusCode];
  const camelCaseLabel = new StringModule(statusCodeLabel).toCamelCase();

  acc[camelCaseLabel] = Number(statusCode);
  
  return acc;
}, {});

const HttpModule = function(req, res) {
  this.req = req;
  this.res = res;
};

HttpModule.prototype.HTTP_STATUS = HTTP_STATUS;

HttpModule.prototype.respondSuccess = function(body) {
  this.res.status(HTTP_STATUS.ok).json(body);
};

HttpModule.prototype.respondNoContent = function(body) {
  this.res.status(HTTP_STATUS.noContent).json(body);
};

HttpModule.prototype.respondBadRequest = function(body) {
  this.res.status(HTTP_STATUS.badRequest).json(body);
};

HttpModule.prototype.respondUnprocessableEntity = function(body) {
  this.res.status(HTTP_STATUS.unprocessableEntity).json(body);
};

HttpModule.prototype.respondInternalError = function(body) {
  this.res.status(HTTP_STATUS.internalServerError).json(body);
};

module.exports = HttpModule;
