import React, { useEffect, useState } from "react";
import './index.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const apiEndpoint = "http://localhost:5001/";
const headers = {
    "Content-Type": "application/json",
};

const axiosInstance = axios.create({
    baseURL: apiEndpoint,
})

function getdata() {
    const form_data = document.getElementById('login_form')
    let data = {}
    for (let i = 0; i < form_data.length; i++) {
        data[form_data[i].id] = form_data[i].value
    }
    return data
}


async function tlog() {
    try{
        const { userId, password } = getdata()
        const res = await axiosInstance.post("login", { userId: userId, password: password }, headers)

        localStorage.setItem("Authorization", res.data.token)
        return res
        
    }catch(e){
        console.log(e)
        return e
    }
}

function Login() {
    const navigate = useNavigate()
    const [userId, setuserId] = useState('')
    const [password, setpassword] = useState('')

    useEffect(() => {
        const token = localStorage.getItem("Authorization");
        if (token) {
            navigate("/dashboard")
        }
    })

    return (
        <div className="index_main">
            <div className="login_home">
            <div className="logo">
        <img src="https://app.sprentzo.com/static/media/SprentzoLogo.1e1c7896002f47b76c4b9d897b054b7c.svg" alt="" />
      </div>
                <form action="" id="login_form">
                    <label htmlFor="userId"> Name: </label>
                    <input type="text" id="userId" placeholder="Email or number" />
                    <label htmlFor="password"> Pasword: </label>
                    <input type="password" id="password" placeholder="password" />
                    <button onClick={(e) => {
                        try {
                            tlog().then(
                                (e)=>{
                                    console.log(e.statusText)
                                    if (e.statusText === "OK"){
                                        navigate("/dashboard")
                                    }
                                    else{
                                        alert("error while trying to login")
                                    }
                                }
                            )                            
                        } catch (e) {
                            console.log(e)
                        }
                        e.preventDefault()
                    }}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login