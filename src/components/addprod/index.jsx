import React, { useEffect, useState } from "react";
import './index.css'
import Navbar from "../Navbar";
import Header from "../header";
import Admin from "../admmain";
import { useNavigate } from "react-router-dom";

const url = 'http://localhost:5001/products'

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: ''
}

function reloadP(){
  document.location.reload();
  myFunction();
}


async function sports() {
  const res = await fetch("http://localhost:5001/sports")
  const jsondata = await res.json()
  const data = jsondata
  // for (let i=0; i<data.length; i++){
  //   sport[data[i].name] = data[i]._id
  // }
  return data
  // return sport 
}


function postData() {
  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Erro('response was not ok ')
      }
      return response.json()
    })
    .then(data => {
      alert("Product added successfully")
      reloadP()
      console.log('Response dta:', data); // Handle the response data
    })
    .catch(error => {
      console.error('Error:', error); // Handle errors
    });
}


async function getFormData() {
  const form = document.getElementById('myForm');

  let data = {}
  const sport = await sports()
  console.log("the startsport", sport)

  console.log(form.length)
  for (let i = 0; i < form.length - 1; i++) {
    if (form[i].id == "sports") {
      for (let j = 0; j < sport.data.length; j++) {
        console.log(sport.data[j]._id)
        if (sport.data[j].name == form[i].value) {
          console.log(sport.data[j].name, sport.data[j]._id)
          data[form[i].id] = sport.data[j]._id
          console.log(data['sports'])
        }
      }
    }
    else {
      console.log(form[i].value)
      data[form[i].id] = form[i].value
    }
  }
  data.images = [data['images']]
  data.sports = [data['sports']]

  options['body'] = JSON.stringify(data)
  console.log("to post", options['body'])
  postData()
}


function Addprod() {
  const navigate = useNavigate()
  const [executed, setExecuted] = useState(false);


  useEffect(() => {
    navigate('/addproducts')
    if (executed) {
      return
    } // Exit early if already executed
    else {

      const button = document.getElementById('btn');

      // Add event listener to the button for the 'click' event
      const handleClick = (e) => {
        e.preventDefault()
        getFormData();
        setExecuted(true); // Mark the effect as executed
        e => { }
      };


      button.addEventListener('click', handleClick);

      // Cleanup function to remove event listener
      return () => {
        button.removeEventListener('click', handleClick);
      };
    }
    // Get a reference to the button element
  }, []); // Include executed in dependency array

  return (
    <>
      <Admin>
        <div className="form">
          <form action="" id="myForm">
            <div className="prod_form">

              <label htmlFor="name">Product Name:
              </label>
              <input id="name" type="text" required />
              <label htmlFor="images">Image URL</label>
              <input type="text" id="images" />
              <label htmlFor="type">Type
              </label>
              <input id="type" type="text" required />
              <label htmlFor="amount">Amount
              </label>
              <input id="amount" type="text" required />
              <label htmlFor="stock">Stock</label>
              <input type="number" id="stock" />
              <label htmlFor="buy">Buy
              </label>
              <input id="buy" type="text" required />
              <label htmlFor="rent">Rent
              </label>
              <input id="rent" type="text" required />
              <label htmlFor="Sports">Sports
              </label>
              <select name="Sports" id="sports">
                <option value="cricket">Cricket</option>
                <option value="football">Football</option>
                <option value="squash">Squash</option>
                <option value="badminton">Badminton</option>
              </select>
              <label htmlFor="description">Description
              </label>
              <div>

              <textarea id="description" cols="5" rows="5" />
              </div>
              <button type="reset" id="btn">Add product</button>
            </div>
          </form>
        </div>

      </Admin>
    </>
  )
}

export default Addprod;