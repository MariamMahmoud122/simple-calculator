import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import About from './components/About';
import Card from './components/Card';
import Connectt from './components/Connectt';
import Connect from './components/Connect';
import Products from './components/Products';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => setCartCount(prev => prev + 1);

  return (
    <Router>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Section1 id="home" />
              <About id="about" />
              <Card id="shop" />
              <Connectt id="connectt" />
              <Connect id="contact" />
            </>
          }
        />
        <Route
          path="/products"
          element={<Products onAddToCart={handleAddToCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;