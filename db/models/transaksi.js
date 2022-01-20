'use strict';
module.exports = (sequelize, DataTypes) => {
  const transaksi = sequelize.define('transaksi', {
    name: DataTypes.STRING
  }, {});
  transaksi.associate = function(models) {
    // associations can be defined here
  };
  return transaksi;
};