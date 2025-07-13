import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ setScrollTo }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollLink = (target) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => setScrollTo(target), 100);
    } else {
      setScrollTo(target);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="company-name">Reasonable Services</div>
        <div className="company-slogan">One Team, Two Services, Double Refresh.</div>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/" onClick={() => handleScrollLink('hero')}>Home</Link>
        </li>
        <li>
          <Link to="/services">Pricing</Link>
        </li>
        <li>
          <Link to="/" onClick={() => handleScrollLink('footer')}>Contact</Link>
        </li>
        <li>
          <Link to="/our-story">Our Story</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;




