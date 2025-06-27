const fs = require("fs")

console.log(fs)

files:

asynchronous :

readFile => synyax : fs.readFile(filePath , "utf-8",(err,data)=>{
    //logic
})

writeFile => syntax : fs.writeFile(filePath,"data",()=>{
    //logic
})

appendFile => creates and update the data in the file : fs.appendFile(filePath,"data",()=>{})

unlink => delete the file : fs.unlink(filePath,()=>{})

synchronous : 

readFileSync
writeFileSync
appendFileSync
unlinkSync


folders :

mkdir() => create a new folder : fs.mkdir(filePath,(err)=>{})

rmdir() => delete a folder : fs.rmdir(filePath,(err)=>{}) => only works if the folder is empty , if not use rmdirSync() or rmdir() with recursive option set to true then use fs.readdir() to delete the files inside the folder and then delete the folder and then use rmdir() to delete the folder.

ex : fs.rmdir(filePath,{recursive:true},(err)=>{}) => this will delete the folder and all the files inside the folder.

rm() => delete a folder and all the files inside the folder : fs.rm(filePath,{recursive : true},(err)=>{})

open() => open a file in read mode : fs.open(filePath,"r",(err,fd)=>{}) 

write() => write data in the file : fs.write(fd,"data",(err)=>{})

close() => close the file : fs.close(fd,(err)=>{})