const path = require ('path');
const fs = require ('fs');

const filePath = path.resolve("MVC","students.json")

const getAllStudentsData = () =>{
    try{
        const data = fs.readFileSync(filePath,"utf-8")
        return JSON.parse(data) || [];
    }catch(err){
        return err.message;
    }
}
const createStudentsData = (data) =>{
    fs.writeFileSync(filePath,JSON.stringify(data))
}

module.exports = { getAllStudentsData , createStudentsData };