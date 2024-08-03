const UserModels = require("../models/UserModels");
const connection = require("./connection");

connection.sync({ force: true });