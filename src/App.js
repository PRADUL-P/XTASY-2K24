import React, { useEffect, useState } from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Venue from './components/venue';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/footer';
import Events from './components/events';

import Slider from './components/CoverFlow';
const App = () => {
 
  
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner /> 
      <Nav />
      <About />
      <Work />
      <Slider/>
      <Events/>
      
      
      <Venue/>
     <Contact />
      <Footer/>
     
    </div>
  );
};

export default App;
