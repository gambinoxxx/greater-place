import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Map navigation items to their corresponding section IDs
  const sectionMap = {
    home: 'header',
    about: 'about',
    gallery: 'gallery',
    events: 'events',
    booking: 'events',
    donations: 'donate',
    testimonials: 'testimonials'
  };

  const handleNavClick = (item) => {
    setToggle(false);
    const sectionId = sectionMap[item];

    if (item === 'about') {
      navigate('/summary');
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img 
          src={images.logo} 
          alt="logo" 
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }} 
        />
      </div>
      
      <ul className="app__navbar-links">
        {Object.keys(sectionMap).map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a 
              href={`#${sectionMap[item]}`}
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

      <div className="app__navbar-right">
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
                {Object.keys(sectionMap).map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${sectionMap[item]}`}
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
      </div>
    </nav>
  );
};

export default Navbar;