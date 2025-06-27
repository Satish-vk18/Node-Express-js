const express = require('express');
const { getStaffContoller, CreateStaffContoller } = require('../Controllers/staffController');

const staffRoute = express.Router();

staffRoute.get("/",getStaffContoller)
staffRoute.post("/",CreateStaffContoller)

module.exports = staffRoute;