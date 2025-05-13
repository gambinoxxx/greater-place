import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import {
  About,
  Footer,
  Header,
  Gallery,
  Testimonials,
  Dancers,
  Donation,
  Booking,
  SummaryPage 
} from './container';
import { Navbar } from './components';
import './App.scss';

// Create a layout component for the home page sections
const HomePageLayout = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -80; // Adjust based on your header height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 0);
    }
  }, [location.hash]);

  return (
    <>
      <Navbar/>
      <Header id="home"/>
      <About id="about"/>
      <Gallery id="gallery"/>
      <Testimonials id="testimonials"/>
      <Donation id="donations"/>
      <Booking id="booking"/>
      <Dancers id="dancers"/>
      <Footer/>
    </>
  );
};

const App = () => (
  <Router>
    <div className='app'>
      <Routes>
        <Route path="/" element={<HomePageLayout />} />
        <Route path="/summary" element={<SummaryPage/>} />
        
        {/* Add redirect for hash links */}
        <Route path="/#:section" element={<HomePageLayout />} />
      </Routes>
    </div>
  </Router>
);

export default App;