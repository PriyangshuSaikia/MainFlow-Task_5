// Navbar.js
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="/">Travel</a>
      </div>
      <ul className="navbar__links">
        <li>
          <a href="#home" className="navbar__link">Home</a>
        </li>
        <li>
          <a href="#about" className="navbar__link">About</a>
        </li>
        <li>
          <a href="#services" className="navbar__link">Services</a>
        </li>
        <li>
          <a href="#contact" className="navbar__link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
