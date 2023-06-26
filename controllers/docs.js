// controller/docs.js
const fs = require('fs');
const path = require('path');
const Document = require('../models/documents');
let documentCounter = 0;

exports.uploadDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { filename } = req.file;
    const documentId = ++documentCounter;

    const newDocument = await Document.create({
      document_id: documentId, 
      name: req.body.name,
      filename: filename,
      description: req.body.description,
      path: filename,
    });

    res.json({ message: 'File uploaded successfully', document: newDocument });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
};

exports.document = function (req, res) {
  res.render('docs');
};




