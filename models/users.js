//database
'use strict'
const {sequelize, DataTypes, err} = require('sequelize')
const db = require('../connection')

var user = db.define('users',{
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    email:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
    active:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    sign_img:{
        type: DataTypes.STRING,
        allowNull:true
    },
    updated_at: {
        type: DataTypes.DATE
    }, 
    created_at:{
        type: DataTypes.DATE
    }
}, {
    freezeTableName : true,
    timestamps  : true,
    createdAt:'created_at',
    updatedAt: 'updated_at'
})

// user.hasMany(signature);
module.exports = user