/* eslint-disable object-shorthand */
const models = require('../db/models');

const findAllPasien = async (page, limit, search) => {
  const respon = await models.sequelize.query(`
    SELECT
      p.id,
      p.name,
      p.bod,
      p.address,
      p.createdAt,
      p.updatedAt
    FROM pasiens p
    WHERE p.name LIKE :search_name
    ORDER BY p.id DESC
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

const countAllPasien = async (page, limit, search) => {
  const respon = await models.sequelize.query(`
    SELECT COUNT(*) as total
    FROM pasiens
    WHERE name LIKE :search_name
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
  findAllPasien, countAllPasien,
};
