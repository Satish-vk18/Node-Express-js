const path = require('path');
const fs = require('fs');

const userFilePath = path.resolve("Task","userDetails.json")

// console.log(userFilePath)

const getAllUsers = () => {
    try{
        const data = fs.readFileSync(userFilePath,"utf-8")
        return JSON.parse(data) || []
    }catch(err){
        return err.message;
    }
};

const createUser = (data) => {
    return fs.writeFileSync(userFilePath,JSON.stringify(data))
    
};

module.exports = { getAllUsers, createUser };