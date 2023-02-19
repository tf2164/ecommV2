import React, {Component} from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Home from "./components/Home";
// import Products from "./components/Products";
import Store from "./components/frontendProducts";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/footer";


function App() {
  return ( <>
  <Navbar />
  <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/frontendProducts" element={<Store/>} />
      {/* <Route path="/Products" element={<Products />} /> */}
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </div>

  <Footer/>
</>
)
}
export default App;
