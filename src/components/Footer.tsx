import React from 'react';
import FooterColumn from './FooterColumn';

function Footer() {
  const footerColumns = [
    {
      title: "Solutions",
      links: [
        { name: "For Buyers", url: "#" },
        { name: "For Suppliers", url: "#" },
        { name: "Enterprise Solutions", url: "#" },
        { name: "Supply Chain Analytics", url: "#" },
        { name: "RFQ Management", url: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", url: "#" },
        { name: "Our Team", url: "#" },
        { name: "Careers", url: "#" },
        { name: "Press", url: "#" },
        { name: "Contact Us", url: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", url: "#" },
        { name: "Case Studies", url: "#" },
        { name: "Webinars", url: "#" },
        { name: "Whitepapers", url: "#" },
        { name: "Industry Reports", url: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", url: "termsofservice" },
        { name: "Privacy Policy", url: "privacy" },
        { name: "Cookie Policy", url: "cookie" },
        { name: "Security", url: "security" },
        { name: "GDPR Compliance", url: "gdpr" }
      ]
    }
  ];

  return (
    <footer>
      <div className="footer-content">
        {footerColumns.map((column, index) => (
          <FooterColumn 
            key={index} 
            title={column.title} 
            links={column.links} 
          />
        ))}
      </div>
      <div className="copyright">
        &copy; 2025 ProcureAigent. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;