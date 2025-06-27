import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { postLoginApi } from "../../Services/api";

const LoginUser = () =>{
    const Navigate = useNavigate();
    const [formData , setFormData] = useState({
        username : "",
        password : "",
    })
    const handleChange = (e)=>{
        const {name , value} = e.target
        setFormData({...formData , [name] : value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if (formData.username === "" || formData.password === ""){
            alert("Please fill in all fields")
        }else{
            postLoginApi(formData).then(res => {
                console.log(res)
                if(res.error == "Invalid Credentials"){
                    alert("You don't have an account , please login")
                    Navigate("/register")
                }else{
                    alert("Login Success")
                    localStorage.setItem("credentials",JSON.stringify(formData))
                    Navigate("/")
                }
            })
             
        }
              
    }
    return (
        <>
            <h1>Login Form :</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">User Name : </label>
                <input type="text" placeholder="Enter UserName.." id="username" name="username" onChange={handleChange}/><br/>
                <label htmlFor="password">Password : </label>
                <input type="password" placeholder="Enter password.." id="password" name="password" onChange={handleChange}/><br/>
                <button type="submit">Login</button>
            </form>
            <div>
                <p>Don't Have Account ? <Link to={"/register"}>Sign Up !</Link></p>
            </div>
        </>
    )
}
export default LoginUser;