import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Revolutionizing B2B Commerce with <span className="brand-accent">AI-Powered</span> Connections</h1>
      <p>ProcureAgent connects buyers and suppliers across manufacturing, automotive, aerospace, and more with intelligent matching, market insights, and streamlined procurement.</p>
      <div className="hero-buttons">
        <Link to='/register' className="btn btn-outline">Get Started as Manufacturer</Link>
        <Link to='/register' className="btn btn-outline">Get Started as Supplier</Link>
      </div>
      <div className="hero-buttons">
        <Link to='/register' className="btn btn-primary">Register as Buyer</Link>
      </div>
    </section>
  );
};

export default Hero;