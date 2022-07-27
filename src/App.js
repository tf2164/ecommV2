import React, {Component} from "react";
import Navbar from "./Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Products from "./components/Products";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/footer";


function App() {
  return ( <>
  <Navbar />
  <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </div>

  <Footer/>
</>
)
}
export default App;
