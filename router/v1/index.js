const router = require('express').Router();

router.use('/v1', require('./user_router'));
router.use('/v1', require('./pasien_router'));
router.use('/v1', require('./dokter_router'));
router.use('/v1', require('./visitor_router'));

module.exports = router;
