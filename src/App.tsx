import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
// import AboutUs from './pages/AboutUs';
import RegistrationPage from './pages/RegistrationPage';
// import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookiePolicy from './pages/CookiePolicy';
import SecurityPolicy from './pages/SecurityPolicy';
import GDPR from './pages/GDPR';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsofService from './pages/TermsofService';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
        <Route path="register" element={<RegistrationPage />} />
        <Route path="/cookie" element={<CookiePolicy />} />
        <Route path="/security" element={<SecurityPolicy />} />
        <Route path="/gdpr" element={<GDPR />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/termsofservice" element={<TermsofService />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;