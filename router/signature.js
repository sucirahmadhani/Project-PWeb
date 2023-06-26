var express = require('express');
const router = express.Router();
const signature = require('../controllers/signature')
const multer = require('multer')


router.get('/signature', signature.signature)
module.exports=router