import React from 'react';
import '../App.css'; // كل CSS في App.css

function Section1() {
  return (
    <div id="carouselExample" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        {[
          "https://i.pinimg.com/474x/20/2a/1b/202a1b76930b3e33826c378423bae5f3.jpg",
          "https://i.pinimg.com/474x/81/7f/e6/817fe65ad7e1f6a8c7c3200f975db51e.jpg",
          "https://i.pinimg.com/474x/e3/60/5f/e3605f20806c7ba8a6937465563a510a.jpg"
        ].map((img, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div className="carousel-img-wrapper">
              <img src={img} className="d-block w-100" alt={`slide-${index}`} />
              <div className="carousel-overlay">
                <h2>Discover Amazing Books</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Section1;