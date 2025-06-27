const fs = require("fs")
const path = require("path")

// console.log(fs)
const filePath = path.join(__dirname,"../Path","FsPath.js")
// const filePath = path.resolve("../Path","path.js")

console.log(filePath)

// fs.readFile(filePath,(err,data)=>{
//     if(err) throw new Error("error",err)
//     else console.log(String(data))
//     // else console.log(data.toString())
    
// })


const dataPath = path.resolve("data.json")
const newData = {
        "id" : 5,
        "name" : "John",
        "age" : 30
    }
// console.log(dataPath)

//readFile  => reading file data

// fs.readFile(dataPath,"utf-8",(err,data)=>{
//     if(err) throw new Error("error", err)
//         else{
//             const updatedData = JSON.parse(data)
//             updatedData.push(newData)
//             // console.log(updatedData)
//             fs.writeFile(dataPath,JSON.stringify(updatedData),()=>{
//                 console.log("data updated");
//             })
//         }
//         // console.log(updatedData)

// })

// writeFile => over-riding the data in the file and create the new file if it doesn't exist

// const writeFilePath = path.join(__dirname ,"hello.txt") 
// // console.log(writeFilePath)
// fs.writeFile(writeFilePath,JSON.stringify(newData),()=>{})

//existSync => checks whether the file exist or not, readFileSync , writeFileSync

// if(fs.existsSync(dataPath)){
//     const data = JSON.parse(fs.readFileSync(dataPath,"utf-8"))
//     data.push(newData)
//     // console.log(data)
//     fs.writeFileSync(dataPath,JSON.stringify(data))
// }

//appendFile => appending or adding the data in the file, if the file doesn't exist it will create the new file

// const appendDataPath = path.resolve("FileSystem","hello.txt")
// const unlinkPath = path.resolve("FileSystem","hiii.txt")
// console.log(appendDataPath)
// fs.appendFile(appendDataPath, "console.log('This is coming from append data')", ()=>{})
// fs.appendFile(unlinkPath,"Hello hiii file",()=>{})


//unlink => deleting the file , if the file doesn't exist it will throw an error

// console.log(unlinkPath)
// fs.unlink(unlinkPath,()=>{
//     console.log("unlink file deleted")
// })

//mkdir(filepath,callback)

// fs.mkdir("Demo",()=>{
//     console.log(" Demo Directory created")
// })

//rmdir(filepath,{recursive:true},callback)

// fs.rmdir("Demo",{recursive : true},()=>{
//     console.log("Demo Directory deleted")
// })


//open(),write(),close()


// fs.open(filePath,"w",(err,fd)=>{
//     // console.log("1")
//     console.log("open console")
//     if(err) return console.log(err)
//     fs.write(fd,"console.log('from the fs file ')",(err)=>{
//         // console.log("2")
//         console.log("write console")
//     })
//     fs.close(fd,()=>{
//         // console.log("3")
//         console.log("file closed")
//     });
// })
