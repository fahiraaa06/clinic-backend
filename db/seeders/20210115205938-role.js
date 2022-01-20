/* eslint-disable no-unused-vars */

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('roles', [
    {
      role: 'super_user',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('roles', null, {}),
};
