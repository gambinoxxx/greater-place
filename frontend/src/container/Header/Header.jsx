import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Header.scss';

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const headerImages = [
    images.profile,
    images.group1,
    images.profile3,
  ];

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % headerImages.length
        );
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, headerImages.length]);

  return (
    <section className="header-section" id="header">
      <div className="app__header app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-content"
        >
          <div className="app__header-info">
            <p className="head-text">Greater place</p>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="app__header-profile"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.img
                key={currentImageIndex}
                src={headerImages[currentImageIndex]}
                alt="Gallery Image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <div className="text-overlay">
                <p className='intro'>Welcome to Greater place Non-profit Inc</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;