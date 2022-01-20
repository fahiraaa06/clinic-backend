const router = require('express').Router();

router.use('/v1', require('./user_router'));
router.use('/v1', require('./pasien_router'));

module.exports = router;
