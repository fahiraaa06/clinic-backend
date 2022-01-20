/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const pasien = sequelize.define('pasien', {
    name: DataTypes.STRING,
    bod: DataTypes.DATEONLY,
    address: DataTypes.STRING,
  }, {});
  pasien.associate = function (models) {
    // associations can be defined here
  };
  return pasien;
};
