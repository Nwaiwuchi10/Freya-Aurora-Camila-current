import React from "react";
import "./Footer.css";
import { FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-icons">
        <FaTwitter className="footer-icon" />
        <FaEnvelope className="footer-icon" />
      </div>
      <hr className="footer-divider" />
      <div className="footer-links">
        <span>Privacy & Cookies</span>
        <span>Terms of Use</span>
        <span>Contact Us</span>
      </div>
    </footer>
  );
};

export default Footer;
