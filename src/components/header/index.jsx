import React from "react";
import './index.css'
import { useNavigate } from "react-router-dom";

const Header = ()=>{
    const navigate = useNavigate()
    return(
    <div className="head">
      <div className="logo">
        <img src="https://app.sprentzo.com/static/media/SprentzoLogo.1e1c7896002f47b76c4b9d897b054b7c.svg" alt="" />
      </div>
        <button className="logout_btn" onClick={()=>{
          localStorage.setItem('Authorization', '')
          navigate('/login')
        }}>Logout</button>
      </div>
    )
}

export default Header