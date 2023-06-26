var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var auth = require('./middleware/index')
var morgan = require('morgan');
var app = express();


const database = require('./connection')
const home = require('./router/home')
const signature = require('./router/signature')
const document = require('./router/docs')
const profile = require ('./router/profile')
const verification = require('./middleware/verification')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use('/auth', require('./middleware'));
app.use('/api', document)


database.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});




app.set('view engine','ejs')
app.use('/css', express.static(__dirname +'/css'))
app.use('/views', express.static(__dirname +'/views'))
app.use('/images', express.static(__dirname + '/images'))

app.listen(3000, ()=> {
    console.log('Server started on port 3000');
});

app.use('/auth', auth)
app.use('/home', home)
app.use('/signature', signature)
app.use('/document', document)
app.use('/profile', profile)

const { index } = require('./controller');



module.exports = app;
