const dbModels = require('../../../app/database/models');

const UserRepository = function(models = dbModels) {
  this.userModel = models.user;
};

UserRepository.prototype.getAll = function(where = {}, limit = 20) {
  return this.userModel.findAll({
    limit,
    order: [['createdAt', 'DESC']],
    where,
  });
};

UserRepository.prototype.getOne = function(where = {}) {
  return this.userModel.findOne({
    limit: 1,
    order: [['createdAt', 'DESC']],
    where,
  });
};

module.exports = UserRepository;