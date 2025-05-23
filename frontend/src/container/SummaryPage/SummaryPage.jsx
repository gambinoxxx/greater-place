import React, { useState } from 'react';
import { Navbar } from '../../components';
import { Footer, Donation, Testimonials } from '../../container';
import { images } from '../../constants';
import './SummaryPage.scss';

const SummaryPage = () => {
  const [showMoreVideos, setShowMoreVideos] = useState(false);

  const videos = [
    { id: 'qZ1OdCVkJhI' },
    { id: 'vfnzs9CvaMg'},
    { id: 'EonTZy7jSn0' },
    { id: 'WmF8_l8TI3U'  },
    { id: '_1fbvkqvMy4'}
  ];

  return (
    <>
      <Navbar/>
      <div className="app__summary">
        {/* Detailed About Section */}
        <section className="detailed-about">
          <div className="section-header">
            <div className="mission-image">
              <img src={images.top3} alt="Our Mission Visual" />
            </div>
            <h2>Our Mission</h2>
            <p className="mission-statement">
              Greater Place nonprofit is a faith-based organization dedicated to liberating and empowering youth and young adults through the creative art of dance, personal development, and social impact.
            </p>
            
            <h2>Our Vision</h2>
            <p className="vision-statement">
              To create a transformative, inclusive, and safe space where young people ages 8-33 (and beyond) can explore their God-given gifts and creative styles in dance. At Greater Place, we envision a future where individuals, including those who have experienced mental health challenges, grow in confidence, deepen their relationship with God, serve their community, experience healing, and receive emotional support through the art of dance.
            </p>
          </div>

          <div className="founder-section">
            <div className="founder-profile">
              <img src={images.brandy} alt="Founder Brandy Onwuzuruike" />
              <div className="founder-info">
                <h3>Brandy Onwuzuruike</h3>
                <p>Founder & Visionary</p>
              </div>
            </div>
            
            <div className="founder-message">
              <p>
                Hi everyone, my name is Brandy Onwuzuruike and God has given me this vision of Greater Place Nonprofit Inc. David danced with all his might because of God's presence according to 2 Samuel 6:14. I've learned that everyone has their own unique style of dance, but it's the presence of God that truly makes a difference in both our lives and the lives of those who witness our dance.
              </p>
              <p>
              I want to pour out everything within me from a place of deep intimacy with God. I don't want to us to put on a performance—we carry the tangible presence of God. I desire for it to flow naturally within us through the art of dance, whether in worship to God or as a message for those He has called us to reach. It's a continual, consistent posture of surrender before God; it's a lifestyle, not just a one-time performance.              </p>
              <p>
                Creating a space where people of all ages can embrace their God-given creative gifts with confidence and boldness in His presence. For as long as I can remember, dancing as a little girl in God's presence shaped my heart in such a powerful way, and He has pruned me in ways I could never have expected. I truly believe this space will not only bless others but also allow them to experience something similar—to connect with God through their creative art of dance.
              </p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="video-section">
          <h2>Latest Videos</h2>
          <p>Enjoy our recent worship and performance videos</p>
          <div className="video-grid">
            {videos.slice(0, showMoreVideos ? 5 : 2).map((video, index) => (
              <div className="video-item" key={video.id}>
                <div className="youtube-container">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h4>{video.title}</h4>
              </div>
            ))}
          </div>
          <button 
            className="show-more-btn"
            onClick={() => setShowMoreVideos(!showMoreVideos)}
          >
            {showMoreVideos ? 'Show Less Videos' : 'Show All Videos'}
          </button>
        </section>

        <Testimonials/>
        <Donation/>
        <Footer/>
      </div>
    </>
  );
};

export default SummaryPage;