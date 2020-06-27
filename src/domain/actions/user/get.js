const HttpModule = require('../../../modules/http');

module.exports = (req, res) => {
  const http = new HttpModule(req, res);

  return http.respondSuccess({ ok: true });
};