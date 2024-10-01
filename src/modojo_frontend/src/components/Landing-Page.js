import React from 'react';
import Header from './Header'; // Header bileşenini içe aktar
import Hero from './Hero';
import Courses from './Courses';
import Contents from './Contents';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Courses />
      <Contents />
      <Footer />
    </div>
  );
}

export default LandingPage;
