import React from 'react';
import '../App.css';

function Connectt() {
  return (
    <section id="connectt" className="connect-section">
      <div className="connect-container fade-in">
        <h1>Get in Touch</h1>
        <p>
          Have questions, suggestions, or want to collaborate? 
          Send us a message and we'll get back to you as soon as possible.
        </p>

        <form className="connect-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn send-btn">Send Message</button>
        </form>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connectt;