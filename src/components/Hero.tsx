import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Revolutionizing B2B Commerce with <span className="brand-accent">AI-Powered</span> Connections</h1>
      <p>ProcureAgent connects buyers and suppliers across manufacturing, automotive, aerospace, and more with intelligent matching, market insights, and streamlined procurement.</p>
      <div className="hero-buttons">
        <button className="btn btn-outline">Get Started as Manufacturer</button>
        <button className="btn btn-outline">Get Started as Supplier</button>
      </div>
      <div className="hero-buttons">
        <button className="btn btn-primary">Register as Buyer</button>
      </div>
    </section>
  );
};

export default Hero;