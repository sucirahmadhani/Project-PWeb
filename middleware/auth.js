var connection = require('../connection');
var mysql = require('mysql2');
var response = require('../response');
var jwt = require('jsonwebtoken');
var config = require('../config/secret');
var ip = require('ip');
var md5 = require('MD5');

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
    var table = ["users", "email", post.emai];

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

// Login User
exports.login = function (req, res) {
    var post ={
        password: req.body.password,
        email: req.body.email
    }

    var query = "SELECT * FROM ?? WHERE ??=? AND ??=?";
    var table = ["user", "password", md5(post.password), "email", post.email];

    query = mysql.format(query, table);
    connection.query(query, function(error, rows){
        if(error){
            console.log(error);
        }else {
            if(rows.length == 1){
                var token = jwt.sign({rows}, config.secret, {
                    expiresIn: 1440
                });
                id_user = rows[0].id;
                
                var data = {
                    id_user: id_user,
                    access_token: token,
                    ip_address: ip.address()
                }

                var query = "INSER INTO ?? SET ??";
                var table =["akses_token"];

                query = mysql.format(query, table);
                connection.query(query, data, function(error, rows){
                    if(error){
                        console.log(error);
                    }else{
                        res.json({
                            success: true,
                            message: 'Token JWT tergenerate!',
                            token: token,
                            currUser: data.id_user
                        });
                    }
                });
            } else{
                res.json({"Error": true, "Message": "Email or Password is wrong!"});
            }
        }
    });
}
