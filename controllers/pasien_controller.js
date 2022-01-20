/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
const models = require('../db/models');

// const createResponse = (data) => ({
//   data: data,
// });

exports.createPasien = async (req, res) => {
  const { name, bird_of_date, address } = req.body;
  try {
    const userRespon = await models.pasien.create({
      name: name,
      bod: bird_of_date,
      address: address,
    });
    return res.status(200).json({
      status: 200,
      message: 'success',
      data: userRespon,
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
    });
  }
};

exports.findPasien = async (req, res) => {
  try {
    const respon = await models.pasien.findAll({
      order: [
        ['id', 'DESC'],
      ],
    });
    res.status(200).json({
      status: 200,
      message: 'success',
      data: respon,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: 'internal server error',
    });
  }
};

exports.deletePasien = async (req, res) => {
  const {
    id,
  } = req.body;
  try {
    const respon = await models.pasien.destroy({
      where: {
        id,
      },
    });
    if (!respon) {
      res.status(400).json({
        status: 400,
        message: 'id not found',
      });
      return;
    }
    res.status(200).json({
      status: 200,
      message: 'success',
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: 'internal server error',
    });
  }
};
