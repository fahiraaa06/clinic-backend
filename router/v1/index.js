const router = require('express').Router();

router.use('/v1', require('./user_router'))

module.exports = router;