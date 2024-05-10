import { useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Admain from './components/admmain';
import Products from './components/viewprod';
import Addprod from './components/addprod';

import Login from './components/login';
import './App.css'
import Admin from './components/admmain';
import Details from './components/prod_details/Details';
import Dashboard from './components/Dashboard';
import Categoreis from './components/categories';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/viewproducts' element={<Products />} />
          <Route path='/addproducts' element={<Addprod />} />
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/categories' element={<Categoreis/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
