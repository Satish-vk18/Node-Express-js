const { addStudentData } = require("../Model/studentsModel")
const { getAllStudentsData } = require("../Model/studentsModel")

const getStudentsContoller = (req,res) =>{
    res.json(getAllStudentsData());
}
const createStudentsContoller = (req,res) =>{
    const newStudent = req.body;
    const data = getAllStudentsData();
    const id = data.length ? data[data.length - 1].stu_id + 1 : 1;
    data.push({stu_id : id , ...newStudent})
    addStudentData(data)
    res.json(data)
}

module.exports = {getStudentsContoller,createStudentsContoller}