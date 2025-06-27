const express = require("express");
const studentsRoute = require("./Routes/studentsRouter");
const staffRoute = require("./Routes/staffRouter");


const app = express();

app.use(express.json());
app.use(express.urlencoded({recursive : true}))

app.use("/students",studentsRoute)
app.use("/staff", staffRoute)


const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})