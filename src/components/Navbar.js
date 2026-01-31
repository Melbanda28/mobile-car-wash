import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ setScrollTo }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollLink = (target) => {
    setMenuOpen(false); // close menu on click

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => setScrollTo(target), 150);
    } else {
      setScrollTo(target);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="company-name">Reasonable Services</div>
        <div className="company-slogan">One Team, Three Services, Total Refresh.</div>
      </div>

      {/* Hamburger button (shows on mobile) */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => handleScrollLink("hero")}>Home</Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Pricing</Link>
        </li>
        <li>
          <Link to="/" onClick={() => handleScrollLink("footer")}>Contact</Link>
        </li>
        <li>
          <Link to="/our-story" onClick={() => setMenuOpen(false)}>Our Story</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;




