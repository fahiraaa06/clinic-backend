'use strict';
module.exports = (sequelize, DataTypes) => {
  const resep = sequelize.define('resep', {
    name: DataTypes.STRING
  }, {});
  resep.associate = function(models) {
    // associations can be defined here
  };
  return resep;
};