var express = require('express');
var auth = require('./auth');
var router = express.Router();


router.post('/register', auth.registrasi);


module.exports = router;