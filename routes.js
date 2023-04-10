'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
    .get(jsonku.index);

    app.route('/show')
    .get(jsonku.show);

    app.route('/show/:id')
    .get(jsonku.showbyId);

    app.route('/add')
    .post(jsonku.addUser);

    app.route('/update/:id')
    .post(jsonku.updateUser);

    app.route('/delete/:id')
    .post(jsonku.deleteUser);
}