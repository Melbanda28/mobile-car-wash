
import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesSection.css';

function ServicesSection() {
  return (
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="service-boxes">

        {/* Car Wash */}
        <div className="service-box">
          <h3>🚗 Refresh My Ride</h3>
          <p>Exterior & interior wash, tire polish, and vacuuming.</p>
          <Link to="/services#refresh-my-ride" className="learn-more-button">
            Learn More
          </Link>
        </div>

        {/* House Cleaning */}
        <div className="service-box">
          <h3>🏠 Refresh My Home</h3>
          <p>Full house cleaning of kitchen, bedrooms, floors and more.</p>
          <Link to="/services#refresh-my-home" className="learn-more-button">
            Learn More
          </Link>
        </div>

        {/*BnB Turnover */}
        <div className="service-box">
          <h3>🏠 BnB Turnover</h3>
          <p>Full guest-ready cleaning for AirBnB and guesthoues.</p>
          <Link to="/services#bnb-turnover" className="learn-more-button">
            Learn More
          </Link>
        </div>

        {/* Combo */}
        <div className="service-box">
          <h3>💎 Double Refresh</h3>
          <p>Combo package: full car wash + complete home clean.</p>
          <Link to="/services#total-refresh" className="learn-more-button">
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;
