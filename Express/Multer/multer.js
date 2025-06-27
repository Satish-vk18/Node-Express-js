const express = require("express")
const fs = require("fs")
const path = require("path")
const multer = require("multer")

const app = express()

app.use(express.json())
app.use(express.urlencoded({recursive : true}))

const folder = path.resolve("Express","Multer","uploads")


const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,folder)
    },
    filename : function(req,file,cb){
        const uniqueSuffix = Date.now() + path.extname(file.originalname)
        cb(null,uniqueSuffix)
    }
})

const uploads = multer({storage : storage})

app.post("/post",uploads.single("image"),(req,res)=>{
    const body = req.body;
    const image = req.file.originalname;
    // const image = req.files;
    // console.log(body);
    // console.log(files)
    const data = JSON.parse(fs.readFileSync(path.resolve("Express","Multer","multer.json"),"utf-8"))
    const id = data.length ? data[data.length - 1].id + 1 : 1;
    data.push({id , ...body , image});
    fs.writeFileSync(path.resolve("Express","Multer","multer.json"),JSON.stringify(data))
    res.json(data)
})

app.get("/post",(req,res)=>{
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>
        <body>
            <form method="post" action="/post" enctype="multipart/form-data">
                <input type="text" name="name">
                <input type="email" name="email">
                <input type="password" name="password">
                <input type="file" name="image" multiple >
                <button type="submit">submit</button>
            </form>
        </body>
        </html>
        `)
})

app.listen(3000,()=>{
    console.log("server is running on port on http://localhost:3000/post")
})