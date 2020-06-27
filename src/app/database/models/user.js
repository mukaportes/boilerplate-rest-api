module.exports = (sequelize, DataTypes) => {
  const UserModel = sequelize.define('User', {
    userUid: {
      field: 'user_uid',
      primaryKey: true,
      type: DataTypes.UUID,
    },
    country: {
      field: 'country',
      primaryKey: false,
      type: DataTypes.STRING,
    },
    company: {
      field: 'company',
      primaryKey: false,
      type: DataTypes.INTEGER,
    },
    createdAt: {
      field: 'created_at',
      primaryKey: false,
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'user',
    timestamps: false,
    schema: 'boilerplate',
  });

  return UserModel;
};
