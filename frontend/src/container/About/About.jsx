import React from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import { images } from '../../constants';
import './About.scss';

const About = () => {
  const navigate = useNavigate();
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
            David danced with all his might because of God's presence according to 2 Samuel 6:14. I’ve learned that everyone has their own unique style of dance, but it’s the presence of God that truly makes a difference in both our lives and the lives of those who witness our dance.
          </p>
          {/* <p>
          I want to pour out everything within me from a place of deep intimacy with God. I don’t want to put on a performance—I carry the tangible presence of God. I desire for it to flow naturally within me through the art of dance, whether in worship to God or as a message for those He has called me to reach. It’s a continual, consistent posture of surrender before God; it’s a lifestyle, not just a one-time performance.
          </p>
          <p>
          Creating a space where people of all ages can embrace their God-given creative gifts with confidence and boldness in His presence. For as long as I can remember, dancing as a little girl in God's presence shaped my heart in such a powerful way, and He has pruned me in ways I could never have expected. I truly believe this space will not only bless others but also allow them to experience something similar—to connect with God through their creative art of dance.
          </p>
          <blockquote>
            "David said to Michal, 'It was before the LORD, who chose me rather than your father or anyone from his 
            house when he appointed me ruler over the LORD's people Israel—I will celebrate before the LORD. I will 
            become even more undignified than this, and I will be humiliated in my own eyes.'"
          </blockquote> */}
          <button 
        className='read-more-btn' 
        onClick={() => navigate('/summary')} // Add click handler
      >
        Read more
      </button>
      </div>
      </div>
      
    </section>
  );
};

export default About;