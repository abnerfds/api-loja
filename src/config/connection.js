require('dotenv').config();
const { Sequelize } = require ('sequelize');

const connection = new Sequelize({
    dialect: "mysql",
    database: "Loja",
    host: "localhost",
    port: process.env.MYSQL_PORT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
});

module.exports = connection;