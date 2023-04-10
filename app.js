var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var morgan = require('morgan');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('dev'));


app.use('/auth', require('./middleware'));

app.listen(3000, ()=> {
    console.log('Server started on port 3000');
});

var routes = require('./routes');
routes(app);


module.exports = app;