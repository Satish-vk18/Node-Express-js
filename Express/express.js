const express = require("express");

const PORT = 5000

const app = express();

const path = require("path")

const fs = require("fs")

app.use(express.json())


app.get("/users",(req,res)=>{
    const data = JSON.parse(fs.readFileSync(path.resolve("Express","data.json"),"utf-8"))
    res.json(data)
})

app.post("/users",(req,res)=>{
    const body = req.body
    // console.log(body)
    const data = JSON.parse(fs.readFileSync(path.resolve("Express","data.json"),"utf-8"))
    const id = data.length ? data[data.length-1].id + 1 : 1;
    data.push({id , ...body})
    fs.writeFileSync(path.resolve("Express","data.json"),JSON.stringify(data))
    res.json(data)
})

app.put("/users/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const updatedUser = req.body;
    const data = JSON.parse(fs.readFileSync(path.resolve("Express","data.json"),"utf-8"))
    const updatedData = data.map(user => user.id === id ? {id , ...updatedUser} : user)
    fs.writeFileSync(path.resolve("Express","data.json"),JSON.stringify(updatedData))
    res.json(updatedData)

})

app.delete("/users/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const data = JSON.parse(fs.readFileSync(path.resolve("Express","data.json"),"utf-8"))
    const filteredData = data.filter(obj => obj.id !== id)
    fs.writeFileSync(path.resolve("Express","data.json"),JSON.stringify(filteredData))
    res.json(filteredData)
})

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})