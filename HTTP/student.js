const http = require('http');
const PORT = 4000;
const path = require('path');
const fs = require('fs');
const { json } = require('stream/consumers');

const filePath = path.resolve("HTTP","student.json")

const server = http.createServer((req,res)=>{
    if(req.url=="/" && req.method == "GET"){
        const dataInFile = fs.readFileSync(filePath,"utf-8")
        res.end(dataInFile)
    }else if(req.url == "/students" && req.method == "POST"){
        let body = "";
        req.on("data",(chunk)=> body = body + chunk.toString())
        req.on("end",()=>{
            const newStudent = JSON.parse(body)
            const studentsData = JSON.parse(fs.readFileSync(filePath,"utf-8"));
            const id = studentsData.length + 1;
            studentsData.push({id , ...newStudent})
            fs.writeFileSync(filePath,JSON.stringify(studentsData))
            res.end(JSON.stringify(studentsData))
        });
    }
    else if (req.url.startsWith("/students/") && req.method == "PUT"){
        let body = "";
        req.on("data", (chunk)=> body = body + chunk.toString())
        req.on("end",()=>{
            const updatedStudent = JSON.parse(body)
            const data = JSON.parse(fs.readFileSync(filePath,"utf-8"))
            const splittedUrl = req.url.split("/")
            const Uid = splittedUrl[splittedUrl.length - 1]
            const index = data.findIndex(obj => obj.id == Uid)
            data[index] = {id : Number(Uid) , ...updatedStudent}
            fs.writeFileSync(filePath,JSON.stringify(data))
            res.end(JSON.stringify(data))
        })
    }else if (req.url.startsWith("/students/"),req.method == "PATCH"){
        let body = "";
        req.on("data",(chunk)=> body = body + chunk.toString())
        req.on("end",()=>{
            const updatedStudent = JSON.parse(body)
            const data = JSON.parse(fs.readFileSync(filePath,"utf-8"))
            const splittedUrl = req.url.split("/")
            const Uid = splittedUrl[splittedUrl.length-1]
            const index = data.findIndex(obj => obj.id == Uid)
            data[index] = {...data[index], ...updatedStudent}
            fs.writeFileSync(filePath,JSON.stringify(data))
            res.end(JSON.stringify(data))
        })
    }else if(req.url.startsWith("/students/") && req.method == "DELETE"){
        const data = JSON.parse(fs.readFileSync(filePath,"utf-8"))
        const splittedUrl = req.url.split("/")
        const Uid = splittedUrl[splittedUrl.length - 1]
        const filterData = data.filter(obj => obj.id != Uid)
        fs.writeFileSync(filePath,JSON.stringify(filterData))
        res.end(JSON.stringify(filterData))
    }
})
server.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})