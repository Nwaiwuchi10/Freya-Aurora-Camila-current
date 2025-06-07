import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import img1 from "../../assets/1-Picsart-AiImageEnhancer.jpg";
import img2 from "../../assets/2-Picsart-AiImageEnhancer.jpg";
import img3 from "../../assets/3-Picsart-AiImageEnhancer.jpg";
import { FaEnvelope } from "react-icons/fa";

const images = [img1, img2, img3];

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(
          rgba(10, 8, 12, 0.73), 
          rgba(0, 0, 0, 0.95)
        ), url(${images[currentImageIndex]})`,
      }}
    >
      <div className="hero-content">
        <h1>Freya Aurora Camila</h1>
        <p>
          Senior Vice President, Wealth Management, Financial Advisor, Family
          Wealth Advisor, International Client Advisor
        </p>
        <p>
          <FaEnvelope style={{ color: "white", fontSize: "30px" }} />
        </p>
        <p>
          <span>Direct:</span>
          <span>(+14698985517) </span>
        </p>

        <button>Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;
