/* eslint-disable no-unused-vars */

const rekamMedis = [
  {
    pasien_id: 1,
    dokter_id: 1,
    checkup: 'pusing',
    medical_record: 'darah tinggi',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    pasien_id: 1,
    dokter_id: 2,
    checkup: 'demam',
    medical_record: 'masuk angin',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('rekam_medis', rekamMedis),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('rekam_medis', null, {}),
};
