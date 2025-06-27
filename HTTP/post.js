const http = require("http")

const server = http.createServer((req,res)=>{
    const obj = {
        id : "1",
        name : "jhon",
        age : 23
    }
    res.end(JSON.stringify(obj))
})
server.listen(4000,()=>{
    console.log("server is running ")
})

// console.log(http)