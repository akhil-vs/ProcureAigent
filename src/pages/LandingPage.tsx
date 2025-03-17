import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Industries from '../components/Industries';
import AIFeatures from '../components/AIFeatures';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const LandingPage = () => {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Industries />
      <AIFeatures />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default LandingPage;