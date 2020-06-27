const http = require('http');
const StringModule = require('../modules/string');

const HTTP_STATUS_LABELS = Object.keys(http.STATUS_CODES).reduce((acc, statusCode) => {
  const statusCodeLabel = http.STATUS_CODES[statusCode];
  const camelCaseLabel = new StringModule(statusCodeLabel).toCamelCase();

  acc[camelCaseLabel] = Number(statusCode);
  
  return acc;
}, {});

const HttpModule = function(req, res) {
  this.req = req;
  this.res = res;
  this.HTTP_STATUS_LABELS = HTTP_STATUS_LABELS;
};

HttpModule.prototype.respondSuccess = function(body) {
  this.res.status(HTTP_STATUS_LABELS.ok).json(body);
};

HttpModule.prototype.respondNoContent = function(body) {
  this.res.status(HTTP_STATUS_LABELS.noContent).json(body);
};

HttpModule.prototype.respondBadRequest = function(body) {
  this.res.status(HTTP_STATUS_LABELS.badRequest).json(body);
};

HttpModule.prototype.respondUnprocessableEntity = function(body) {
  this.res.status(HTTP_STATUS_LABELS.unprocessableEntity).json(body);
};

HttpModule.prototype.respondInternalError = function(body) {
  this.res.status(HTTP_STATUS_LABELS.internalServerError).json(body);
};

module.exports = HttpModule;
