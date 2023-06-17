const express = require("express");
const route = express.Router();
const { addUser, checkUser } = require('../controller/controller');

route.post('/', addUser);
route.post('/login', checkUser);

module.exports = route