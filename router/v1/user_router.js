const router = require('express').Router();
const user = require('../../controllers/user_contraller');
const validate = require('../../validation/user_validation');
// const auth = require('../../midleware');

router.post('/user/registrasi', validate.simple, user.registrasiUser);
router.post('/user/login', validate.simple, user.loginUser);

module.exports = router;