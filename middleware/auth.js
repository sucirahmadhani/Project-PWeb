var connection = require('../connection');
var mysql = require('mysql2');
var response = require('../response');
var jwt = require('jsonwebtoken');
var config = require('../config/secret');
var ip = require('ip');

/*Registrasi User*/
exports.registrasi = function (req, res) {
    var post = {
         username: req.body.username,
         email: req.body.email,
         password: req.body.password,
         active: req.body.active,
         sign_img:req.body.sign_img,
         created_at: new Date(),
         updated_at: new Date()
    }

    var query = "SELECT email FROM ?? WHERE ??=?";
    var table = ["users", "email", post.email];

    query = mysql.format(query, table);

    connection.query(query, function (error, rows) {
        if (error) {
             console.log(error);
        }else{
            if(rows.length == 0){
                var query = "INSERT INTO ?? SET ?";
                var table = ["users"];
                query = mysql.format(query, table);
                connection.query(query, post, function(error, rows){
                    if(error){
                        console.log(error);
                    }else{
                        response.ok("Registration success", res);
                    }
                });
            }else{
                response.ok("email already registered", res);
            }
        }
    })
}
