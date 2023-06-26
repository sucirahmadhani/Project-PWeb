'use strict'
const {sequelize, DataTypes, err} = require('sequelize')
const db = require('../connection');

var signature = db.define('signature', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    document_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jabatan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    signed_at: {
      type: DataTypes.DATE
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
});
  
module.exports = signature;