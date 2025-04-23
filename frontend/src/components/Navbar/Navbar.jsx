import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleNavClick = (id) => {
    setToggle(false);
    const element = document.getElementById(id);
    if (element) {
      // Add smooth scroll with offset for fixed header
      const yOffset = -80; // Adjust this value based on your header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img 
          src={images.logo} 
          alt="logo" 
          onClick={() => handleNavClick('home')} 
          style={{ cursor: 'pointer' }} 
        />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'gallery', 'events', 'booking', 'donations', 'testimonials'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a 
              href={`#${item}`} 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item);
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: toggle ? 0 : '100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="mobile-menu"
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'gallery', 'events', 'booking', 'donations', 'testimonials'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;