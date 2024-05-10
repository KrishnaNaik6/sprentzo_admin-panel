import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import './index.css'
import Header from "../header";
import Admin from "../admmain";
import Categoreis from "../categories";



function Products() {
  const [prod, Setprod] = useState([])
  const [filter, Setfilter] = useState('')

  useEffect(() => {
    Setfilter(localStorage.getItem('filter'))
    const fetchdat = async () => {
      const response = await fetch('http://localhost:5001/products?limit=100');
      const jsonData = await response.json();
      console.log(jsonData)
      return jsonData
    }
    
    fetchdat().then((dat) => {
      Setprod(dat.data)
      console.log(prod)
    }
  )
  const newprod = prod.filter((j) => j?.sports[0]?._id == filter)
  console.log("filtered", newprod)

  const changed= ()=>{
    Setfilter(localStorage.getItem('filter'))
  }
  
  
}, [])

return (
  <>
      <Admin>
        <div className="prods">
          <p>Products List</p>
          {/* <Categoreis/> */}
          <div className="prod">
            {prod
            .map((e) => <div key={e._id} className="item">
              <div className="image">
                <img src={e.images} alt="" />
              </div>
              <div className="dtl">
                <div>
                  <p key={e._id}>{e.name}</p>
                </div>
                <div className="details">
                  <p >Price : {e.amount}</p>
                  <p >Stock : {e.stock}</p>
                </div>
              </div>
                <div className="prod_details">
                    <a href= {`/details/${e._id}`}> More details</a>
                </div>
            </div>)
          }
          </div>
        </div>

      </Admin>
    </>
  )
}

export default Products