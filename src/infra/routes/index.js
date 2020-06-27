const getUser = require('../../domain/actions/user/get');

module.exports = (app) => {
  // ROUTES
  app.get('/api/v1/user', getUser);
};
