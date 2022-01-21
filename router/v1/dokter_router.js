const router = require('express').Router();
const pasien = require('../../controllers/dokter_controller');
const auth = require('../../midleware');

router.get('/dokter/pasien', pasien.dokterFindPasien);
router.get('/dokter', pasien.findDokter);
router.get('/dokter/visitors', auth.auth, auth.mustDdokter, pasien.dokterFindVisitors);
router.get('/dokter/visitor/:pasienId', auth.auth, auth.mustDdokter, pasien.detailPasien);
// router.post('/dokter/pasien', pasien.createPasien);
// router.delete('/dokter/pasien', pasien.deletePasien);

module.exports = router;
