/* eslint-disable no-unused-vars */

const obats = [
  {
    obat_name: 'paracetamol',
    price: 10000,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    obat_name: 'amoxcilin',
    price: 20000,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('obats', obats),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('obats', null, {}),
};
