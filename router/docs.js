const express = require('express');
const multer = require('multer');
const path = require('path');
const Document = require('../models/documents');
const docsController = require('../controllers/docs');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});


const upload = multer({ storage: storage });

router.post('/upload', upload.single('document'), docsController.uploadDocument);

router.get('/', async (req,res)=> {
  res.render('index')
})

module.exports = router;