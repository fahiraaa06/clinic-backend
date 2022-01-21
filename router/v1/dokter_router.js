const router = require('express').Router();
const pasien = require('../../controllers/dokter_controller');

router.get('/dokter/pasien', pasien.dokterFindPasien);
router.get('/dokter', pasien.findDokter);
// router.post('/dokter/pasien', pasien.createPasien);
// router.delete('/dokter/pasien', pasien.deletePasien);

module.exports = router;
