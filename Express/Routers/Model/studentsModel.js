const path = require("path")
const fs = require("fs");

const filePath = path.resolve("Express","Routers","Data","studentsData.json")

const getAllStudentsData = ()=>{
    try{
        const studentsData = fs.readFileSync(filePath,"utf8");
        return JSON.parse(studentsData) || [];
    }catch(err){
        return err.message;
    }
}

const addStudentData = (data)=> {
    return fs.writeFileSync(filePath,JSON.stringify(data))
}

module.exports = { getAllStudentsData,addStudentData}