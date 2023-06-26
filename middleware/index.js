var express = require('express');
var auth = require('./auth');
var router = express.Router();


router.post('/register', auth.registrasi);
router.post('/login', auth.login);

module.exports = router;