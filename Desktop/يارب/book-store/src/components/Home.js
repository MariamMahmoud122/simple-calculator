// components/Home.js
import React from 'react';
import Section1 from './Section1';
import About from './About';
import Card from './Card';
import Connect from './Connect';
import './Home.css';

function Home({ onAddToCart }) {
  const title = "Welcome to Our Bookstore";

  return (
    <>
      <Section1 />
      <About />
      <Card onAddToCart={onAddToCart} />

      <div className="hero-container">
        <h1 className="typing-text">
          {title.split("").map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.08}s` }}>
              {char}
            </span>
          ))}
        </h1>
      </div>

      <Connect />
    </>
  );
}

export default Home;