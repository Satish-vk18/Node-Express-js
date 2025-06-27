const http = require('http');
const path = require('path');
const fs = require('fs');

const dataPath = path.resolve("data.json")
console.log(dataPath)
const server = http.createServer((req,res)=>{
    // console.log(dataPath)
    // console.log("server is created")
    fs.readFile(dataPath,"utf-8",(err , data)=>{
        if(err) throw new Error(err)
        else{
            console.log("hello")
            console.log(data)
            res.end(data)
        }
    })
})
server.listen(2000,()=>{
    console.log("server is running at http://localhost:2000")
})