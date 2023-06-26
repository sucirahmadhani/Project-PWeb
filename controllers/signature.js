var connection = require('../connection');
var mysql = require('mysql2');
var response = require('../response');
var jwt = require('jsonwebtoken');
var config = require('../config/secret');
var ip = require('ip'); 
var md5 = require('md5');
const signature = require('../models/signatures')



exports.signature = function (req, res) {
    res.render('signature');
}