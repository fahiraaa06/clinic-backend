/* eslint-disable object-shorthand */
const models = require('../db/models');

const findVisitors = async (page, limit, search) => {
  const respon = await models.sequelize.query(`
    SELECT
      v.id,
      v.pasien_id,
      v.dokter_id,
      v.status,
      v.createdAt,
      v.updatedAt,
      d.dokter_name,
      p.name
    FROM visitors v
    LEFT JOIN pasiens p ON p.id = v.pasien_id
    LEFT JOIN dokters d ON d.id = v.dokter_id
    WHERE p.name LIKE :search_name
    ORDER BY v.id DESC
    LIMIT :offset, :limit
    `,
  {
    replacements: {
      limit: limit,
      offset: page === 0 ? page : (page - 1) * limit,
      search_name: `%${search}%`,
    },
    type: models.sequelize.QueryTypes.SELECT,
  });
  return respon;
};

const countVisitors = async (page, limit, search) => {
  const respon = await models.sequelize.query(`
    SELECT COUNT(*) as total
    FROM visitors v
    LEFT JOIN pasiens p ON p.id = v.pasien_id
    LEFT JOIN dokters d ON d.id = v.dokter_id
    WHERE p.name LIKE :search_name
    `,
  {
    replacements: {
      limit: limit,
      offset: page === 0 ? page : (page - 1) * limit,
      search_name: `%${search}%`,
    },
    type: models.sequelize.QueryTypes.SELECT,
  });
  return respon;
};

module.exports = {
  findVisitors, countVisitors,
};
