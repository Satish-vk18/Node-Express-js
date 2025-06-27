const { getAllUsers, createUser } = require("../Models/authModel");

const auth = (req,res) =>{
    if(req.url == "/register" && req.method == "POST"){
        let body = "";
        req.on("data", (chunk) => body += chunk.toString());
        req.on("end",()=>{
            const newUser = JSON.parse(body)
            const data = getAllUsers();
            const id = data.length + 1;
            data.push({id, ...newUser});
            createUser(data)
            res.end(JSON.stringify(data))
        })

    }else if (req.url == "/login" && req.method == "POST"){
        let body = "";
        req.on("data", chunk => body += chunk.toString());
        req.on("end", () =>{
            const UserInputs = JSON.parse(body);
            const data = getAllUsers();
            const matchedUser = data.find(user => (user.email == UserInputs.email || user.username == UserInputs.username) && user.password == UserInputs.password);
            if(matchedUser){
                res.end(JSON.stringify(matchedUser))
            }
            else{
               res.end(JSON.stringify({error: "Invalid Credentials"}))
                // res.end(alert("invalid credentials"))
            }
        })

    }
}
module.exports = auth;