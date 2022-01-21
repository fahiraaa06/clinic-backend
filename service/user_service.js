/* eslint-disable object-shorthand */
const models = require('../db/models');

const findUsers = async (page, limit, search) => {
  const respon = await models.sequelize.query(`
    SELECT
      u.id,
      u.email,
      u.full_name,
      u.role,
      u.createdAt,
      u.updatedAt
    FROM users u
    WHERE u.full_name LIKE :search_name
    ORDER BY u.id DESC
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

const countUsers = async (page, limit, search) => {
  const respon = await models.sequelize.query(`
    SELECT COUNT(*) as total
    FROM users
    WHERE full_name LIKE :search_name
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

const findUserById = async (userId) => {
  const respon = await models.sequelize.query(`
    SELECT
      u.id,
      u.email,
      u.full_name,
      u.role,
      u.createdAt,
      u.updatedAt
    FROM users u
    WHERE u.id = :id
    `,
  {
    replacements: {
      id: userId,
    },
    type: models.sequelize.QueryTypes.SELECT,
  });
  return respon;
};

module.exports = {
  findUsers, countUsers, findUserById,
};
