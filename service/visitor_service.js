/* eslint-disable object-shorthand */
const models = require('../db/models');

const findVisitors = async (page, limit, search) => {
  const respon = await models.sequelize.query(`
    SELECT
      v.id,
      v.user_id,
      v.dokter_id,
      v.visitor_name,
      v.status,
      v.createdAt,
      v.updatedAt
    FROM visitors v
    WHERE v.visitor_name LIKE :search_name
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
    FROM visitors
    WHERE visitor_name LIKE :search_name
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
