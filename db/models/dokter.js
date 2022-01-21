/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const dokter = sequelize.define('dokter', {
    user_id: DataTypes.INTEGER,
    dokter_name: DataTypes.STRING,
  }, {});
  dokter.associate = function (models) {
    // associations can be defined here
  };
  return dokter;
};
