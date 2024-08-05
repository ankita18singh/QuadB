import React from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css";
import wallE from '../resources/wallE.jpg';

const HomePage = () => {
  return (
    <div className="home-page">
      <main className="main-content">
        <div className="text-content">
          <h1>Want A <br />High Quality Lifestyle</h1>
          <Link className="explore-btn" to="/products">Explore Now →</Link>
        </div>
        <div className="image-content">
          <img src={wallE} alt="WALL-E Robot" className="chair-image" />
        </div>
      </main>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About Us</h3>
              <p>We provide high-quality Lifestyle products.</p>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p>Email: mayankita2003@gmail.com</p>
              <p>Phone: +91 7669934555</p>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <p>Facebook | Twitter | Instagram</p>
            </div>
          </div>
          <hr />
          <p className="copyright">Copyright &copy; 2023 FurFash</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
