const http = require('http');
const auth = require('./Controllers/authController');
const PORT = 5000

const server = http.createServer(auth);

server.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`)
})