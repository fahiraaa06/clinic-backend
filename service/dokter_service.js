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

module.exports = {
  dokterFindPasien, countDokterFindPasien, findDokter, countDokter,
};
