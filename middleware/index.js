var express = require('express');
var auth = require('./auth');
var verification = require('./verification')
const router = express.Router();

router.post('/register', auth.register);
router.post('/login', auth.login);
router.get('/login', (req,res) => {
    res.render('login')
})



module.exports = router;