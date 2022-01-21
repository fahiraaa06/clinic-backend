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

module.exports = {
  findMedicalRecords,
};
