import React from 'react';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="app__footer">
      <div className="app__footer-container">
        {/* Navigation Links */}
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li onClick={() => scrollToSection('home')}>Home</li>
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
            <p>1300 Ridenour Boulevard</p>
            <p>Kennesaw, GA 30152</p>
            <p>Phone: <a href="tel:7704301708">(770) 430-1708</a></p>
            <p>Fax: (770) 430-1709</p>
            <p>Email: <a href="mailto:info@mysite.com">info@mysite.com</a></p>
          </address>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="app__footer-copyright">
        <p>Copyright &copy; Greater Place Non Profit Inc. 2023</p>
      </div>
    </footer>
  );
};

export default Footer;