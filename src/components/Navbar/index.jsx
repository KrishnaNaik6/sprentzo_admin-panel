import React from "react";
import './index.css'
import { useParams } from "react-router-dom";

function Navbar() {
  const {id} = useParams()
  return (

    <div className="sidebar">
      <ul>
        <div>
        <div>
          <li><a href="/dashboard" target="_self">Dashboard</a></li>
        </div>
          <li><a href="/viewproducts" target="_self">View products</a></li>
        </div>
        <div>
          <li><a href="/addproducts" target="_self">Add products</a></li>
        </div>
      </ul>
    </div>
  )
}

export default Navbar;