import React, { useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">Freya Aurora Camila</div>

      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

      <ul className={`navbar__links ${menuOpen ? "open" : ""}`}>
        <li className="navbar__item">
          <a href="#">Home</a>
        </li>
        <li className="navbar__item dropdown">
          <a href="#">Services</a>
          <ul className="dropdown-content">
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Mobile Apps</a>
            </li>
            <li>
              <a href="#">UI/UX Design</a>
            </li>
          </ul>
        </li>
        <li className="navbar__item">
          <a href="#">About</a>
        </li>
        <li className="navbar__item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
