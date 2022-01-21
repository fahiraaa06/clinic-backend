/* eslint-disable object-shorthand */
const models = require('../db/models');

const dokterFindPasien = async (page, limit, search) => {
  const respon = await models.sequelize.query(`
    SELECT
      p.id,
      p.name,
      p.bod,
      p.address,
      p.createdAt,
      p.updatedAt,
      m.checkup,
      m.medical_record
    FROM pasiens p
    LEFT JOIN rekam_medis m ON m.pasien_id = p.id
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

const countDokterFindPasien = async (page, limit, search) => {
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

const findDokter = async (page, limit, search) => {
  const respon = await models.sequelize.query(`
    SELECT
      d.id, d.dokter_name
    FROM dokters d
    WHERE d.dokter_name LIKE :search_name
    ORDER BY d.id DESC
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

const countDokter = async (page, limit, search) => {
  const respon = await models.sequelize.query(`
    SELECT COUNT(*) as total
    FROM dokters
    WHERE dokter_name LIKE :search_name
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

const findDokterById = async (userId) => {
  const respon = await models.sequelize.query(
    `
      SELECT * FROM dokters WHERE user_id = :user_id
    `,
    {
      replacements: {
        user_id: userId,
      },
      type: models.sequelize.QueryTypes.SELECT,
    },
  );
  return respon;
};

const dokterFindVisitors = async (page, limit, search, dokterId) => {
  const tm = new Date();
  const mo = tm.getMonth() + 1 < 10 ? `0${tm.getMonth() + 1}` : tm.getMonth() + 1;
  const visiting = `${tm.getFullYear()}-${mo}-${tm.getDate()}`;
  const respon = await models.sequelize.query(`
    SELECT
      v.id,
      v.status,
      p.name,
      v.createdAt,
      v.updatedAt
    FROM visitors v
    LEFT JOIN pasiens p ON p.id = v.user_id
    WHERE p.name LIKE :search_name
    AND DATE(v.createdAt) = :visiting
    ORDER BY v.id DESC
    LIMIT :offset, :limit
    `,
  {
    replacements: {
      limit: limit,
      visiting: visiting,
      offset: page === 0 ? page : (page - 1) * limit,
      search_name: `%${search}%`,
    },
    type: models.sequelize.QueryTypes.SELECT,
  });
  return respon;
};

const dokterCountVisitors = async (page, limit, search, dokterId) => {
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
  dokterFindPasien,
  countDokterFindPasien,
  findDokter,
  countDokter,
  dokterFindVisitors,
  dokterCountVisitors,
  findDokterById,
};
