'use strict';
module.exports = (sequelize, DataTypes) => {
  const rekam_medis = sequelize.define('rekam_medis', {
    name: DataTypes.STRING
  }, {});
  rekam_medis.associate = function(models) {
    // associations can be defined here
  };
  return rekam_medis;
};