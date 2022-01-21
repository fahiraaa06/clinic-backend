/* eslint-disable no-unused-vars */

const dokters = [
  {
    user_id: 2,
    dokter_name: 'dr.ahmad',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 3,
    dokter_name: 'dr.budi',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('dokters', dokters),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('dokters', null, {}),
};
