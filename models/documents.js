'use strict'
const {sequelize, DataTypes, err} = require('sequelize')
const db = require('../connection');

var document = db.define('documents', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    document_id : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    filename : {
        type: DataTypes.STRING,
        allowNull: false
    },
    description : {
        type: DataTypes.STRING,
        allowNull: false
    },
    path : {
        type: DataTypes.STRING,
        allowNull: false
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

module.exports = document;