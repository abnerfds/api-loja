const connecton = require('../config/connection');
const { DataTypes } = require("sequelize");

const UserModels = connecton.define("user",{
    firstname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
}, {
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'
});

module.exports = UserModels;