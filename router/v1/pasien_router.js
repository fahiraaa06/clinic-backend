const router = require('express').Router();
const pasien = require('../../controllers/pasien_controller');

router.post('/pasien', pasien.createPasien);
router.get('/pasien', pasien.findPasien);
router.delete('/pasien', pasien.deletePasien);

module.exports = router;
