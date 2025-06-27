const express = require('express');
const { getStudentsContoller, createStudentsContoller } = require('../Controllers/studentsController');

const studentsRoute = express.Router()

studentsRoute.get("/",getStudentsContoller);
studentsRoute.post("/",createStudentsContoller)


module.exports = studentsRoute;