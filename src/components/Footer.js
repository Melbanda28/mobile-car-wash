 import React from 'react';
import './Footer.css';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a 
  href="https://wa.me/27767201554" 
  target="_blank" 
  rel="noopener noreferrer"
  title="Chat with us on WhatsApp"
>
  <FaWhatsapp />
</a>

        <a href="https://www.instagram.com/YOUR_INSTAGRAM" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/YOUR_FACEBOOK" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Reasonable Services. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
