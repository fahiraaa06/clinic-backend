/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const visitor = sequelize.define('visitor', {
    user_id: DataTypes.INTEGER,
    dokter_id: DataTypes.INTEGER,
    visitor_name: DataTypes.STRING,
    // status: DataTypes.ENUM,
  }, {});
  visitor.associate = function (models) {
    // associations can be defined here
  };
  return visitor;
};
