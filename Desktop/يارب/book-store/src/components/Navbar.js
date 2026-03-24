import React from 'react';
import './Navbar.css';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home" style={{ cursor: 'pointer' }}>Logo</a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#home" style={{ cursor: 'pointer' }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#shop" style={{ cursor: 'pointer' }}>Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" style={{ cursor: 'pointer' }}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#connectt" style={{ cursor: 'pointer' }}>Contact</a>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <div className="register me-3" style={{ cursor: 'pointer' }}>
              <i className="fas fa-user me-1"></i> Register
            </div>
            <div className="cart-icon position-relative" style={{ cursor: 'pointer' }}>
              <i className="fas fa-shopping-cart fa-lg"></i>
              {cartCount > 0 && (
                <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartCount}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;