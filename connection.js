//database
const sequalize =  require('sequelize')
const db = new sequalize('project', 'root', '', {
    host    : "localhost",
    dialect : "mysql"
})

module.exports = db