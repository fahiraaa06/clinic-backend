const service = require('../service/dokter_service');
const srv = require('../service/medical_record_service');

exports.dokterFindPasien = async (req, res) => {
  const page = parseInt(req.query.current_page, 10) || 1;
  const limit = parseInt(req.query.per_page, 10) || 10;
  const search = req.query.search || '';
  try {
    const respon = await service.dokterFindPasien(page, limit, search);
    const total = await service.countDokterFindPasien(page, limit, search);
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
    res.status(500).json({
      status: 500,
      message: 'internal server error',
    });
  }
};

exports.findDokter = async (req, res) => {
  const page = parseInt(req.query.current_page, 10) || 1;
  const limit = parseInt(req.query.per_page, 10) || 10;
  const search = req.query.search || '';
  try {
    const respon = await service.findDokter(page, limit, search);
    const total = await service.countDokter(page, limit, search);
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
    res.status(500).json({
      status: 500,
      message: 'internal server error',
    });
  }
};

exports.dokterFindVisitors = async (req, res) => {
  const page = parseInt(req.query.current_page, 10) || 1;
  const limit = parseInt(req.query.per_page, 10) || 10;
  const search = req.query.search || '';
  try {
    let dokterId = null;
    if (req.user.role === 'dokter') {
      const dokter = await service.findDokterById(req.user.id);
      dokterId = dokter[0].id;
    }
    const respon = await service.dokterFindVisitors(
      page, limit, search, req.user.role, dokterId,
    );
    const total = await service.dokterCountVisitors(
      page, limit, search, req.user.role, dokterId,
    );
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

exports.detailPasien = async (req, res) => {
  try {
    const pasien = await service.detailPasien(req.params.pasienId);
    const records = await srv.findMedicalRecords(req.params.pasienId);
    res.status(200).json({
      status: 200,
      message: 'success',
      data: {
        pasien: pasien[0],
        records,
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
