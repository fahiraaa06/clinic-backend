/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    role_name: DataTypes.STRING,
  }, {});
  role.associate = function (models) {
    // associations can be defined here
  };
  return role;
};
