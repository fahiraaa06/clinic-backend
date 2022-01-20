/* eslint-disable no-unused-vars */

const dokters = [
  {
    dokter_name: 'dr.ahmad',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    dokter_name: 'dr.budi',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('dokters', dokters),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('dokters', null, {}),
};
