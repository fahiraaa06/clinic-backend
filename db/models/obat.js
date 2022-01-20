'use strict';
module.exports = (sequelize, DataTypes) => {
  const obat = sequelize.define('obat', {
    name: DataTypes.STRING
  }, {});
  obat.associate = function(models) {
    // associations can be defined here
  };
  return obat;
};