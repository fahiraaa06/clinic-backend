'use strict';
module.exports = (sequelize, DataTypes) => {
  const dokter = sequelize.define('dokter', {
    name: DataTypes.STRING
  }, {});
  dokter.associate = function(models) {
    // associations can be defined here
  };
  return dokter;
};