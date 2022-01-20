/* eslint-disable no-unused-vars */

const rekamMedis = [
  {
    pasien_id: 1,
    dokter_id: 1,
    registrasion_at: new Date(),
    checkup: 'pusing',
    medical_record: 'darah tinggi',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('rekam_medis', rekamMedis),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('rekam_medis', null, {}),
};
