const models = require('../db/models');

const findMedicalRecords = async (pasienId) => {
  const respon = await models.sequelize.query(`
    SELECT
      m.createdAt,
      m.updatedAt
    FROM rekam_medis m
    WHERE m.pasien_id = :pasien_id
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
