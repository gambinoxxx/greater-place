import React from 'react';
import { images } from '../../constants';
import './About.scss';

const About = () => {
  return (
    <section className="app__about" id="about">
      <h2 className="head-text">ABOUT US</h2>
      
      <div className="app__about-content">
        <div className="app__about-profile">
          <img src={images.brandy} alt="Brandy Onwuzuruike" />
        </div>
        
        <div className="app__about-text">
          <h3>Brandy Onwuzuruike</h3>
          <p>
            Hi everyone my name is Brandy Onwuzuruike and God has given me this vision of Greater Place Nonprofit Inc.. 
            Greater Place is atmosphere of God's presence where kids, youth and young adult can express themselves 
            through the art of dance. God spoke and is still speaking again through visions, dreams and messengers for 
            years about Greater Place.
          </p>
          <p>
            Now, I am finally going forth, by faith, trusting God with this vision he has entrusted me with. There are 
            two verses that have been on my heart concerning this nonprofit. 2 Samuel 6:22 and 1 Thessalonians 5:23.
          </p>
          <blockquote>
            "David said to Michal, 'It was before the LORD, who chose me rather than your father or anyone from his 
            house when he appointed me ruler over the LORD's people Israel—I will celebrate before the LORD. I will 
            become even more undignified than this, and I will be humiliated in my own eyes.'"
          </blockquote>
          {/* <button className="read-more-btn">Read More</button> */}
        </div>
      </div>
    </section>
  );
};

export default About;