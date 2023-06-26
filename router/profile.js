var express = require('express');
const router = express.Router();
const profile = require('../controllers/profile')




router.get('/profile', profile.profile)
module.exports=router