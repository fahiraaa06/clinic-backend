/* eslint-disable no-unused-vars */
const visitors = [
  {
    user_id: 1,
    dokter_id: 1,
    status: 'waiting',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 2,
    dokter_id: 1,
    status: 'waiting',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('visitors', visitors),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('visitors', null, {}),
};
