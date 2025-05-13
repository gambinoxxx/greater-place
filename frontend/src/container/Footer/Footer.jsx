import React from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -80; // Adjust based on your header height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80; // Adjust based on your header height
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="app__footer">
      <div className="app__footer-container">
        {/* Navigation Links */}
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li onClick={() => scrollToSection('header')}>Home</li>
            <li onClick={() => scrollToSection('donate')}>Donation</li>
            <li onClick={() => scrollToSection('gallery')}>Gallery</li>
            <li onClick={() => scrollToSection('events')}>Booking & Calendar</li>
            <li onClick={() => scrollToSection('about')}>About Us</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <address>
            <p>10609 Veterans Memorial Hwy</p>
            <p>Lithia Springs, GA 30122</p>
            <p>United States</p>
            <p>Phone: <a href="tel:7704301708">(770) 430-1708</a></p>
            <p>Fax: (770) 430-1708</p>
            <p>Email: <a href="mailto:info@mysite.com">greaterplace@greaterplacenon-profit.com</a></p>
          </address>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/reel/DI23Np5t2n1/?igsh=Nm5nbjVhbWt3aWF5" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@greaterplacenonprofit?si=JU5hHLMOAUOmBSAF" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="app__footer-copyright">
        <p>Copyright &copy; Greater Place Non Profit Inc. 2025</p>
      </div>
    </footer>
  );
};

export default Footer;