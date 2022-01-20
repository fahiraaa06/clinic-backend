/* eslint-disable no-unused-vars */

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('roles', [
    {
      role_name: 'super_user',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      role_name: 'dokter',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      role_name: 'kasir',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      role_name: 'resepsionis',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('roles', null, {}),
};
