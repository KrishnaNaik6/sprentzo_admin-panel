import React from "react"
import "./index.css"
import { useState, useEffect } from "react";
import Products from "../viewprod";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import Header from "../header";

// function Admin() {
//   const navigate = useNavigate()
//   const [show, setShow] = useState('select');

//   return (
//     <div className='main'>
//       <Header/>
//       <div className="adm">
//         <Navbar />
//         <div id="showid" className="show">
//           <p> Dashboard </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Admin;

const Admin = ({ children }) => {
  return (

    <div className="navbar">
      <Header />
      <div className="dash">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>

  )
}

export default Admin