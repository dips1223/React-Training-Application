import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Product from './components/Product/Product';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/Home';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
