/* eslint-disable no-unused-vars */

const pasiens = [
  {
    name: 'banbang',
    bod: '2000-01-01',
    address: 'bambang',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'budi',
    bod: '2000-01-01',
    address: 'bambang',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('pasiens', pasiens),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('pasiens', null, {}),
};
