import { useEffect, useState } from "react"
import { data, Navigate, useNavigate } from "react-router-dom"

const Home = () =>{
    const Navigate = useNavigate()
    const [logData,setLogData] = useState()
    const [isLoggedIn , setLoggnedIn] = useState(true)

    const handleLogOut = () =>{
        localStorage.removeItem("credentials",{})
        setLoggnedIn(false)
    }
    useEffect (()=>{
        const data = JSON.parse(localStorage.getItem("credentials"))
        if(data){
            setLogData("LogOut")
        }else{
            Navigate("/login")
        }
    },[isLoggedIn])
    return (
        <>
            <div>
                <h1>Home</h1>
                <button onClick={handleLogOut}>{logData}</button>
            </div>
        </>
    )
}
export default Home;