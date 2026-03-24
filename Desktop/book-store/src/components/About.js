import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../App.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container fade-in">
        <h1>Discover the Joy of Reading</h1>
        <p>
          Books open your mind, boost focus, and take you on adventures beyond imagination. 
          Explore new ideas, cultures, and stories—one page at a time.
        </p>
        <p>
          Reading sharpens your mind, reduces stress, and inspires creativity. 
          Dive into our collection and find your next favorite book today!
        </p>
        <ScrollLink
          to="shop"          // id للـ Shop Section
          smooth={true}
          duration={500}
          className="btn shop-btn"
        >
          Explore Books
        </ScrollLink>
      </div>
    </section>
  );
}

export default About;