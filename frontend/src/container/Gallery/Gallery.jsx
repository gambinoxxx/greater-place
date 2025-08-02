import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '../../constants';
import './Gallery.scss';

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const allImages = [
    images.top4, images.top2, images.top3, 
    images.sub1, images.sub2, images.sub3,
    images.sub4, images.sub5, images.sub6,
    images.sub7, images.sub8, images.sub9,
    images.sub10, images.sub11, images.sub12,
    images.sub13, images.sub14, images.sub15,
    images.new1, images.new2, images.new3,
    images.new4, images.new5, images.new6,
    images.new7, images.new8, images.new9,
    images.new10

  ];

  const displayedImages = showAll ? allImages : allImages.slice(0, 3);

  return (
    <section className="app__gallery" id="gallery">
      <h2 className="head-text">Our Gallery</h2>
      <div className="app__gallery-container">
        {displayedImages.map((image, index) => (
          <motion.div
            key={`gallery-${index}`}
            className="app__gallery-item"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} alt={`Gallery ${index + 1}`} />
            <div className="app__gallery-overlay" />
          </motion.div>
        ))}
      </div>
      <button 
        className="gallery-toggle-btn"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? 'Show Less' : 'Show More'}
      </button>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img 
              src={selectedImage}
              alt="Enlarged"
              className="modal-image"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
