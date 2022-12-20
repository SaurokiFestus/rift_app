import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Product from "./pages/Product";

function App() {

  const [items, setItems] = useState(0);
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route exact="true" path="/" element={<Home/>}/>
        <Route exact="true" path="/view_product/:id" element={<Product items={items} setItems={setItems}/>}/>
       
      </Routes>
      </BrowserRouter>
    </div>

    
  );
}

export default App;
