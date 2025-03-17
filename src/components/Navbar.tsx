import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div>
        <div className="menu-icon">
        <span></span>
      </div>
      <div className="logo">
          <strong><Link to='/'><span className='green'>Procure</span><span>A</span><span className='black'>i</span><span>gent</span></Link></strong>
      </div>
      </div>
      
    <nav>
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="text-white lg:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Nav Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center w-full lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0">
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
              <button onClick={() => scrollToSection('pricing')}>Pricing</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('aboutus')}>About Us</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="auth-buttons">
      <Link to="/" className="btn btn-outline">Login</Link>
      <Link to="/register" className="btn btn-outline">Sign Up</Link>
    </div>
    </header>
  );
};

export default Navbar;