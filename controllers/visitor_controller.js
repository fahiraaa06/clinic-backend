/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
const models = require('../db/models');
const service = require('../service/visitor_service');
const serviceRecord = require('../service/medical_record_service')

exports.createVisitor = async (req, res) => {
  const { pasien_id, dokter_id, chekup } = req.body;
  try {
    await service.createVisitors(pasien_id, dokter_id)
    await serviceRecord.createMedicalRecords(pasien_id, dokter_id, chekup)
    return res.status(200).json({
      status: 200,
      message: 'success',
    });
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
    });
  }
};

exports.findVisitors = async (req, res) => {
  const page = parseInt(req.query.current_page, 10) || 1;
  const limit = parseInt(req.query.per_page, 10) || 10;
  const search = req.query.search || '';
  try {
    const respon = await service.findVisitors(page, limit, search);
    const total = await service.countVisitors(page, limit, search);
    res.status(200).json({
      status: 200,
      message: 'success',
      data: {
        docs: respon,
        paging: {
          current_page: page,
          per_page: limit,
          total: total[0].total,
          search,
        },
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 500,
      message: 'internal server error',
    });
  }
};

exports.deleteVisitor = async (req, res) => {
  const {
    id,
  } = req.body;
  try {
    const respon = await models.visitor.destroy({
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
