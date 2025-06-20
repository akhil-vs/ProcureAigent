import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // First navigate to homepage if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className='flex justify-between'>
        {/* <div className="menu-icon">
          <span></span>
        </div> */}
        <div className="logo">
            <strong><Link to='/'><span className='green'>Procure</span><span>Aigent</span></Link></strong>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden  text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
      
    <nav>
      <div className="hidden md:flex container mx-auto flex justify-between items-center">
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
            <li>
              <button onClick={() => scrollToSection('services')}>Services</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('industries')}>Industries</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('features')}>Features</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('howitworks')}>How it works?</button>
            </li> 
          </ul>

      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-blue-700 p-4 space-y-4 text-white text-center">
          <li>
              <button onClick={() => scrollToSection('services')}>Services</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('industries')}>Industries</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('features')}>Features</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('howitworks')}>How it works?</button>
            </li>
        </motion.ul>
      )}
    </nav>
    <div className="auth-buttons">
      <Link to="/" className="text-white hover:text-white border border-aigent hover:bg-aigent focus:ring-4 focus:outline-none focus:ring-aigent text-base font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-aigent dark:text-white dark:hover:text-white dark:hover:bg-aigent dark:focus:ring-aigent">Login</Link>
      <Link to="/register" className="text-white hover:text-white border border-aigent hover:bg-aigent focus:ring-4 focus:outline-none focus:ring-aigent text-base font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-aigent dark:text-white dark:hover:text-white dark:hover:bg-aigent dark:focus:ring-aigent">Sign Up</Link>
    </div>
    </header>
  );
};

export default Navbar;