'use strict';
module.exports = (sequelize, DataTypes) => {
  const pasien = sequelize.define('pasien', {
    name: DataTypes.STRING
  }, {});
  pasien.associate = function(models) {
    // associations can be defined here
  };
  return pasien;
};