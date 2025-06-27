const path = require("path")
const fs = require("fs")

const filePath = path.resolve("Express","Routers","Data","staffData.json")

const getAllStaffsData = ()=>{
    try{
        const staffData = fs.readFileSync(filePath,"utf8");
        return JSON.parse(staffData) || [];
    }catch(err){
        return err.message;
    }
}

const addStaffData = (data)=> {
    return fs.writeFileSync(filePath,JSON.stringify(data))
}

module.exports = { getAllStaffsData,addStaffData};