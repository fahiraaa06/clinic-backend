const models = require('../db/models');

const findObatByRecordId = async (recordId) => {
  const respon = await models.sequelize.query(`
    SELECT
      r.id,
      r.createdAt,
      r.updatedAt,
      o.obat_name
    FROM reseps r
    LEFT JOIN obats o ON o.id = r.obat_id
    WHERE r.rekam_medis_id = :pasien_id
    ORDER BY r.id DESC
    `,
  {
    replacements: {
      pasien_id: recordId,
    },
    type: models.sequelize.QueryTypes.SELECT,
  });
  return respon;
};

module.exports = {
  findObatByRecordId,
};
