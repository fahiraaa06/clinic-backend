/* eslint-disable no-unused-vars */

const reseps = [
  {
    rekam_medis_id: 1,
    obat_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    rekam_medis_id: 1,
    obat_id: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    rekam_medis_id: 2,
    obat_id: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('reseps', reseps),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('reseps', null, {}),
};
