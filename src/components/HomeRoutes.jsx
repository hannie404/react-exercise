import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import ProductPage from '../components/ProductPage';
import { Routes, Route } from 'react-router-dom';

function HomeRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/ProductPage' element={<ProductPage/>}></Route>
      </Routes>
    </div>
  )
}

export default HomeRoutes