import React from "react";
import {   Route, Routes } from "react-router";
import Navbar from "./Navbar";
import Home from './Pages/Home/Home';
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";


const App = () => {
  return (
  <div className="APP">
    <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </ div>
    
  );
};

export default App;
