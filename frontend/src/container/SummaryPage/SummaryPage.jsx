import React, { useState } from 'react';
import { Navbar } from '../../components';
import { Footer, Donation, Testimonials } from '../../container';
import { images } from '../../constants';
import './SummaryPage.scss';

const SummaryPage = () => {
  const [showMoreVideos, setShowMoreVideos] = useState(false);

  const videos = [
    { id: 'IXCgjcl-APs' },
    { id: 'KmP1bqAB0_Q'},
    { id: 'O_UcyWEkqSw' },
    { id: '_1fbvkqvMy4'},
    { id: 'D2v3MfolRyI'},
    { id: 'ySDk4L9Yr-w'},
    { id: 'Xp-AhwGJQCU'},
    { id: 'nnPUAXNlOTk'}
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
              <p>Hi everyone! My name is Brandy Onwuzuruike, and I am the founder and visionary of Greater Place Nonprofit Inc.

For as long as I can remember, I’ve had dreams and revelations of dancing and helping kids and youth. These visions confirmed what God was placing in my heart—that now is the time to fully walk in the calling He has given me. </p>
              <p>As a little girl, dancing in God’s presence shaped my spirit, soul, and body in powerful ways. Over time, God has continued to prune and prepare me in ways I never expected. I truly believe that Greater Place is more than a dance it’s a space for holistic growth. It’s a place where individuals of all ages, especially youth, can be nurtured spiritually, emotionally, and physically—through the beautiful avenue of dance.

              At Greater Place, we believe God is concerned with the whole person. In 1 Thessalonians 5:23, Paul prays that our spirit, soul, and body be kept blameless until the coming of the Lord. This Scripture is foundational to what we do—we want people to grow in wholeness, strength, and confidence in Christ. </p>
              <p>We also celebrate that everyone has their own unique style of dance. Dance is more than movement—it’s worship, expression, and a powerful way to communicate truth. Our aim is to cultivate a space where dance flows not from pain or insecurity, but from healing, freedom, and joy in Christ—just like David, who “danced before the Lord with all his might” (2 Samuel 6:14).
Greater place is atmosphere of God presence. Can’t wait to grow and dance with you!</p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="video-section">
          <h2>Latest Videos</h2>
          <p>Enjoy our recent worship and performance videos</p>
          <div className="video-grid">
            {videos.slice(0, showMoreVideos ? 8 : 3).map((video, index) => (
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