import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Revolutionizing B2B eCommerce with <br /><span>AI-Powered</span> Connections</h1>
      <p>ProcureAigent connects manufacturers, suppliers and buyers across various industries with intelligent matching, market insights, and streamlined procurement.</p>
      <div className="hero-buttons">
        <Link to='/register' className="text-white hover:text-white border border-aigent hover:bg-aigent focus:ring-4 focus:outline-none focus:ring-aigent text-base font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-aigent dark:text-white dark:hover:text-white dark:hover:bg-aigent dark:focus:ring-aigent">Get Started as Manufacturer</Link>
        <Link to='/register' className="text-white hover:text-white border border-aigent hover:bg-aigent focus:ring-4 focus:outline-none focus:ring-aigent text-base font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-aigent dark:text-white dark:hover:text-white dark:hover:bg-aigent dark:focus:ring-aigent">Get Started as Supplier</Link>
      </div>
      <div className="hero-buttons">
        <Link to='/register' className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 text-base font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Register as Buyer</Link>
      </div>
    </section>
  );
};

export default Hero;