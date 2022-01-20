/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    token: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
  }, {});
  user.associate = function (models) {
    // associations can be defined here
  };
  return user;
};
