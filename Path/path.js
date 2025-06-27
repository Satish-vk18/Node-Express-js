const path = require ("path")
const os = require("os")

// const filename = "D://fakepath/images/image1.png"

// console.log(path.isAbsolute(filename)) // check whethere the file is in absolute or not

console.log(module.filename)                         //C:\Nodejs\Path\path.js
console.log(__filename)                              //C:\Nodejs\Path\path.js
console.log(module.path)                             //C:\Nodejs\Path
console.log(__dirname)                                //C:\Nodejs\Path
console.log(path.dirname(__dirname))                  //C:\Nodejs
console.log(path.dirname(__filename))                  //C:\Nodejs\Path
console.log(path.basename("C:/Nodejs/Path/path.js"))  //path.js
console.log(path.extname("C:/Nodejs/Path/path.js"))    //.js
console.log(path.basename(__filename,".js"))            //path


//parse => convert from string to object

const parsedPath = path.parse(__filename)
console.log(parsedPath)         // returns an object with the following properties

//format => convert from object to string

const formatedPath = path.format(parsedPath)
console.log(formatedPath)       //returns an string with the following format

//join => join two or more paths together 

const joinPath = path.join(__dirname,"images","image1.png")
console.log(joinPath)
console.log(path.join(__dirname,"../Modules","module.js"))

//resolve => resolve the path to an absolute path
console.log("hello",path.resolve("../Modules" , "module.js"))

// os module => provides a way to interact with the operating system

console.log(os)
console.log(os.arch())
console.log(os.availableParallelism())
console.log(os.release())
console.log(os.totalmem())
console.log(os.version())
console.log(os.userInfo())
console.log(os.platform())
console.log(os.cpus())
console.log(os.freemem())
console.log(os.type())
console.log(os.networkInterfaces())
console.log(os.hostname())
console.log(os.tmpdir())












