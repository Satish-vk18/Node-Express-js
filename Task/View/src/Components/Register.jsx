import React from "react";
import { useState } from "react";
import { postRegisterApi } from "../../Services/api";
import { Link, useNavigate } from "react-router-dom";


const RegisterUser = () =>{
    const Navigate = useNavigate();
    const [formData , setFormData] = useState({
        username : "",
        email : "",
        password : "",
        confirmpassword : ""
    })
    const handleChange = (e)=>{
        const {name , value} = e.target
        setFormData({...formData , [name] : value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        postRegisterApi(formData).then(res => console.log(res))
        Navigate("/login")

    }
    return (
        <>
            <h1>Register Form :</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">User Name : </label>
                <input type="text" placeholder="Enter UserName.." id="username" name="username" onChange={handleChange} required/><br/>
                <label htmlFor="email">Email : </label>
                <input type="email" placeholder="Enter email.." id="email" name="email" onChange={handleChange} required/><br/>
                <label htmlFor="password">Password : </label>
                <input type="password" placeholder="Enter password.." id="password" name="password" onChange={handleChange} required/><br/>
                <label htmlFor="confirmpassword">Confirm Password : </label>
                <input type="password" placeholder="Enter confirm password.." id="confirmpassword" name="confirmpassword" onChange={handleChange} required/><br/>
                <button type="submit">Register</button>
            </form>
            <div>
                <p>Already Have Account ? <Link to={"/login"}>Sign In !</Link></p>
            </div>
        </>
    )
}
export default RegisterUser;