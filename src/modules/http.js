const HTTP_STATUS = require('../domain/enums/http');

const HttpModule = function(req, res) {
  this.req = req;
  this.res = res;
}

HttpModule.prototype.respondSuccess = function(body) {
  this.res.status(HTTP_STATUS.success).json(body);
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
