import React from "react";
import "./Footer.css";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  const phoneNumber = "+19125536855";
  const WhatsappClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  return (
    <footer className="footer-container">
      <div className="footer-icons">
        <FaWhatsapp className="footer-icon" onClick={WhatsappClick} />
        <a href="mailto:freyaauroracamila@gmail.com">
          <FaEnvelope className="footer-icon" />
        </a>
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
