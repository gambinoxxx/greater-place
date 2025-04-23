import React from 'react';
import {About, Footer, Header, Gallery, Testimonials, Dancers, Donation,Booking} from './container'
import { Navbar } from './components';
import './App.scss';


const App = () => (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Gallery/>
      <Testimonials/>
      <Donation/>
      <Booking/>
      <Dancers/>
      <Footer/>
      
    </div>
  );


export default App;
