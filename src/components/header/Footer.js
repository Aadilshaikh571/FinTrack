import React from "react";
import "./Footer.css"; // Importing the footer CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-heading">Company</h4>
          <p className="footer-link">About Us</p>
          <p className="footer-link">Careers</p>
          <p className="footer-link">Blog</p>
          <p className="footer-link">Press</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Support</h4>
          <p className="footer-link">Help Center</p>
          <p className="footer-link">Privacy Policy</p>
          <p className="footer-link">Terms of Service</p>
          <p className="footer-link">Contact Us</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Resources</h4>
          <p className="footer-link">Documentation</p>
          <p className="footer-link">API Reference</p>
          <p className="footer-link">Community</p>
          <p className="footer-link">Tutorials</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Connect with Us</h4>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">© 2024 FinTrack. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
