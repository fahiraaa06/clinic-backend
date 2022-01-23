const models = require('../db/models');

const findMedicalRecords = async (pasienId) => {
  const respon = await models.sequelize.query(`
    SELECT
      m.id,
      m.createdAt,
      m.updatedAt,
      m.checkup,
      m.medical_record
    FROM rekam_medis m
    WHERE m.pasien_id = :pasien_id
    ORDER BY m.id DESC
    `,
  {
    replacements: {
      pasien_id: pasienId,
    },
    type: models.sequelize.QueryTypes.SELECT,
  });
  return respon;
};

const createMedicalRecords = async (pasien_id, dokter_id, chekup) => {
  const respon = await models.sequelize.query(`
    INSERT INTO rekam_medis (pasien_id, dokter_id, checkup, createdAt, updatedAt) 
    VALUES (:pasien_id, :dokter_id, :chekup, :createdAt, :updatedAt)
    `,
  {
    replacements: {
      pasien_id: pasien_id,
      dokter_id: dokter_id,
      chekup: chekup,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    type: models.sequelize.QueryTypes.INSERT,
  });
  return respon;
};

module.exports = {
  findMedicalRecords, createMedicalRecords
};
