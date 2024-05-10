import React, { useContext, useState } from "react";
import { useEffect } from "react";
import './index.css'

const endpoint = "http://localhost:5001/sports"

function Categoreis() {
    const [sport, setSport] = useState([])
    // const user = useContext(Cats)
    async function sports() {
        const sports = await fetch(endpoint)
        const jsonData = await sports.json()
        return jsonData
    }

    useEffect(() => {
        sports().then((e) => {
            console.log(e)
            setSport(e.data)
        })
    }, [])


    return (
        <div className="sport_cat">
            <p>{console.log("thesfjsfjs fsd", typeof sport)}</p>
            {sport.map((e) => 
                <div 
                className="category" 
                key={e._id}
                onClick={(j) => {
                    console.log(e._id)
                    localStorage.setItem('filter', e._id)
                }}
                >{e.name}</div>
            )}
        </div>
    )
}

export default Categoreis;