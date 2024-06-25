import React from 'react';
import './FooterComponent.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span>© 2024 Airbnb, Inc.</span>
        <span>·</span>
        <span>Privacy</span>
        <span>·</span>
        <span>Terms</span>
        <span>·</span>
        <span>Sitemap</span>
        <span>·</span>
        <span>Company details</span>
      </div>
      <div className="footer-right">
        <span>English (IN)</span>
        <span>₹</span>
        <span>INR</span>
        <span>Support & resources</span>
      </div>
      
    </footer>
  );
};

export default Footer;
