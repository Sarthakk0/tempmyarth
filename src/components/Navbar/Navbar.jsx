import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Ngo <span>Foundation</span></div>

        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li onClick={closeMenu}>Home</li>
          <li onClick={closeMenu}>Programs</li>
          <li onClick={closeMenu}>About Us</li>
          <li onClick={closeMenu}>Contact Us</li>
        </ul>

        <button className="donate-btn-navbar">Donate</button>
      </nav>
    </>
  );
}