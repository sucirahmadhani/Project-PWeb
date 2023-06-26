'use strict';

var response = require('./response');
var connection = require('./connection');

exports.index = function (req, res){
    response.ok("Berhasil", res)
};

/*Menampilkan Data*/
exports.show = function(req, res){
    connection.query('SELECT * FROM users', function(error, rows, fileds){
        if(error){
            console.log(error);
        }
        else{
            response.ok(rows, res)
        }
    } );
};

exports.showbyId = function (req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM users WHERE id = ?', [id],
    function(error, rows, fileds){
        if(error){
            console.log(error);
        }
        else{
            response.ok(rows, res)
        }
    } );
}

/*Menambah Data*/
exports.addUser = function (req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var active = req.body.active;
    var sign_img = req.body.sign_img;

    connection.query('INSERT INTO users (username, email, password, active, sign_img) VALUES(?,?,?,?,?)',
        [username, email, password, active, sign_img],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("User already added!", res)
            }
        });
};

/*Update Data*/
exports.updateUser = function (req, res) {
    let id = req.params.id;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var active = req.body.active;
    var sign_img = req.body.dign_img;

    connection.query('UPDATE users SET username=?, email=?, password=?, active=?, sign_img=? WHERE id=?',
        [username, email, password, active, sign_img, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("User already updated!", res)
            }
        });
};

/*Hapus Data*/
exports.deleteUser = function (req, res){
    let id = req.params.id;
    connection.query('DELETE FROM users WHERE id = ?', [id],
    function(error, rows, fileds){
        if(error){
            console.log(error);
        }
        else{
            response.ok("User already deleted!", res)
        }
    } );
}
