const { getAllStudentsData, createStudentsData } = require("../Model/studentsModel");

const studentController = (req,res) =>{
    const splittedUrl = req.url.split("/")
    const Uid = splittedUrl[splittedUrl.length - 1]
    if (req.url == '/students' && req.method == 'GET'){
        res.end(JSON.stringify(getAllStudentsData()))
    }
    else if(req.url.startsWith("/students/") && req.method == "GET"){
        const data = getAllStudentsData();
        const userFound = data.find((user) => user.id == Uid);
        if(userFound){
            res.end(JSON.stringify(userFound))
            }else{
                res.end("User not found")
            }
    }
    else if(req.url == "/students" && req.method == 'POST'){
        let body = '';
        req.on("data", chunk => body += chunk.toString());
        req.on("end",()=>{
            const newData = JSON.parse(body);
            const data = getAllStudentsData();
            const id = data.length + 1
            data.push({id,...newData})
            createStudentsData(data)
            res.end(JSON.stringify(data));
        })
    }else if(req.url.startsWith("/students/") && req.method == "PUT"){
        let body = '';
        req.on("data",chunk => body += chunk.toString());
        req.on("end",()=>{
            const newData = JSON.parse(body);
            const data = getAllStudentsData();
            const matchedIndex = data.findIndex(obj => obj.id == Uid)
            if(matchedIndex == -1){
                res.end("user not found")
            }else{
                data[matchedIndex] = {id:Number(Uid) , ...newData}
                createStudentsData(data)
                res.end(JSON.stringify(data))
            }        
        })
    }else if(req.url.startsWith("/students/") && req.method == "PATCH"){
        let body = '';
        req.on("data",chunk => body += chunk.toString());
        req.on("end",()=>{
            const UpdatedData = JSON.parse(body)
            const data = getAllStudentsData();
            const matchedIndex = data.findIndex(obj => obj.id == Uid)
            if(matchedIndex == -1){
                res.end("user not found")
            }else{
                data[matchedIndex] = {...data[matchedIndex], ...UpdatedData}
                createStudentsData(data)
                res.end(JSON.stringify(data))
            }
        })
    }else if(req.url.startsWith("/students/") && req.method == "DELETE"){
        const data = getAllStudentsData();
        const filterdData = data.filter(obj => obj.id != Uid)
        createStudentsData(filterdData)
        res.end(JSON.stringify(filterdData))
    }
}

module.exports = studentController;