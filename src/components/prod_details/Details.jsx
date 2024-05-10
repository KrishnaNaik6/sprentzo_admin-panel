import React from "react";
import { json, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Admin from "../admmain";
import { useNavigate } from "react-router-dom";
import { FaBeer } from "react-icons/fa"
import { AiOutlineArrowLeft } from "react-icons/ai";
import './index.css'

const Details = () => {
    const [prod_dtl, setdetails] = useState({})

    const { id } = useParams()

    const navigate = useNavigate()

    async function getdata() {
        const data = await fetch("http://localhost:5001/products/" + id)
        const jsonData = await data.json()
        console.log("the dta is", jsonData)
        setdetails(jsonData)
        return data
    }

    useEffect(() => {
        getdata()

    }, [])


    return (
        <>
            <Admin>
                <div className="desc">
                    <div className="backbtn" onClick={() => {
                        navigate('/viewproducts')
                    }}>
                        <AiOutlineArrowLeft 
                        style={{
                            width:'1.5rem',
                            height: "1.5rem"
                        }}/>
                    </div>
                    <div className="prod_info">
                        <div><img src={prod_dtl.images} style={{width:"100px", height:"100px"}}/></div>
                        <div><p>Name: {prod_dtl.name}</p></div>
                        <div><p>Amount: {prod_dtl.amount}</p></div>
                        <div><p>Buy: {prod_dtl.buy}</p></div>
                        <div><p>Type: {prod_dtl.type}</p></div>
                        <div><p>Stock: {prod_dtl.stock}</p></div>
                    </div>

                </div>
            </Admin>
        </>
    )
}

export default Details