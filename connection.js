var mysql = require('mysql2');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "project"
});

conn = connection;
conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql connected');
});

module.exports = conn;