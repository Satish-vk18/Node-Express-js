const http = require ('http');

const studentController = require('./Controller/studentsController');
const PORT = 7000;


const server = http.createServer(studentController);

server.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`)
})