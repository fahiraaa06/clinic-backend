/* eslint-disable no-unused-vars */

const transaksis = [
  {
    transaction_id: 1,
    resep_id: 1,
    price_checkup: 20000,
    total: 50000,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    transaction_id: 2,
    resep_id: 2,
    price_checkup: 10000,
    total: 40000,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('transaksis', transaksis),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('transaksis', null, {}),
};
