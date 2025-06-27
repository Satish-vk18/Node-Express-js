const http = require("http")
const port = 10000

const server = http.createServer((req,res)=>{
    console.log("im in create server...")
    res.end(
        "<h1> Hello worl</h1>  <a href = 'http://localhost:10000'> Go to next </a> "
    )
})
server.listen(port,()=>{
    console.log(`server is running on port : ${port}`)
})

// console.log(http)