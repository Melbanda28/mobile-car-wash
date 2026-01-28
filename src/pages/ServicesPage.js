import React from 'react';
import './ServicesPage.css';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'; // Email icon

const createWhatsAppLink = (message) =>
  `https://wa.me/27767201554?text=${encodeURIComponent(message)}`;

function ServicesPage() {
  return (
    <div className="services-page">
      <h1 className="services-title">Our Services & Pricing</h1>

      <div className="service-boxes">

        {/* 🚗 Refresh My Ride */}
        <div className="service-box">
          <h2>🚗 Refresh My Ride</h2>
          <ul>
            <li>Wash, rinse, and shine outside</li>
            <li>clean all windows and mirrors</li>
            <li>Polish tires</li>
            <li>Vacuum and polish interior</li>
          </ul>
          <p><strong>Pricing:</strong> R150 (small cars), R200 (SUVs)</p>

          <a
            className="whatsapp-button"
            href={createWhatsAppLink(
              `Hi! I'd like to book the 'Refresh My Ride' service.\n\nIncludes:\n- Wash, rinse, and shine outside\n- Polish tires\n- Vacuum and polish interior\n\nPricing: R150 (small cars), R200 (SUVs)`
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Book via WhatsApp
          </a>

          <a
            className="email-button"
            href="mailto:Reasonableservices777@gmail.com?subject=Booking%20Request:%20Refresh%20My%20Ride&body=Hi!%20I%20would%20like%20to%20book%20the%20'Refresh%20My%20Ride'%20service.%0AIncludes:%0A- Wash, rinse and shine outside%0A- Polish tires%0A- Vacuum and polish interior%0APricing: R150/R200"
          >
            <MdEmail /> Book via Email
          </a>
        </div>

        {/* 🏠 Refresh My Home */}
        <div className="service-box">
          <h2>🏠 Refresh My Home</h2>
           <p><strong>Mini Home Clean - 450</strong></p>
           1–2 small Bedrooms & Bathrooms
          <ul>
            <li>Clean kitchen, bathrooms and other rooms</li>
            <li>Vacuum, mop, and shine floors</li>
            <li>Dust and wipe surfaces</li>
            <li>Clean windows and mirrors</li>
          </ul>
          <p><strong>Max Home Clean - 650</strong></p>
          3–4 Bedrooms & 1+ Bathrooms
          <ul>
            <li>Clean kitchen, bathrooms and other rooms</li>
            <li>Vacuum, mop, and shine floors</li>
            <li>Dust and wipe surfaces</li>
            <li>Clean windows and mirrors</li>
          </ul>
          Please note that this service does not include bed changing,fridge and cupboard interior
          cleaning.

          <a
            className="whatsapp-button"
            href={createWhatsAppLink(
              `Hi! I'd like to book the 'Refresh My Home' service.\n\nIncludes:\n- Clean kitchen, bathrooms and other rooms\n- Vacuum, mop, and shine floors\n- Dust and wipe surfaces\n- Clean windows and mirrors\n\nPricing: R450`
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Book via WhatsApp
          </a>

          <a
            className="email-button"
            href="mailto:Reasonableservices777@gmail.com?subject=Booking%20Request:%20Refresh%20My%20Home&body=Hi!%20I%20would%20like%20to%20book%20the%20'Refresh%20My%20Home'%20service.%0AIncludes:%0A- Clean kitchen, bathrooms and other rooms%0A- Vacuum, mop, and shine floors%0A- Dust and wipe surfaces%0A- Clean windows and mirrors%0APricing: R450"
          >
            <MdEmail /> Book via Email
          </a>
        </div>


<div className="service-box">
  <h2>🏡 Guest House / Airbnb Full Service</h2>
  <ul>
    <li>Bed making & linen change</li>
    <li>Fridge interior and exteriors</li>
    <li>Cupboards interior and exterior</li>
    <li>Full kitchen & bathroom clean</li>
    <li>Floors and living areas</li>
    <li>Yard and garage sweeping</li>
     <li>Window cleaning </li>
    <li>Wiping of all surface areas</li>
    <li>Full guest turnover reset</li>
  </ul>
  <p><strong>Pricing:</strong> R1040</p>

  <a
            className="whatsapp-button"
            href={createWhatsAppLink(
              `Hi! I'd like to book the 'Double Refresh' combo service.\n\nIncludes:\n- Car Wash + Home Clean Combo\n- Perfect for weekends & events\n\nPricing: R600`
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Book via WhatsApp
          </a>

          <a
            className="email-button"
            href="mailto:Reasonableservices777@gmail.com?subject=Booking%20Request:%20Double%20Refresh&body=Hi!%20I%20would%20like%20to%20book%20the%20'Double%20Refresh'%20combo%20service.%0AIncludes:%0A- Car Wash + Home Clean Combo%0A- Perfect for weekends and events%0APricing: R600"
          >
            <MdEmail /> Book via Email
          </a>
</div>




        {/* 💎 Double Refresh */}
        <div className="service-box">
          <h2>💎 Double Refresh</h2>
          <ul>
            <li>Refresh My Ride + Home Clean Combo</li>
            <li>Discounted package deal depending on the package you choose</li>
            <li>Perfect for weekends & special events</li>
          </ul>
          <p><strong>Pricing:</strong> Depends on the combo chosen</p>
          R100 off any combo!!

          <a
            className="whatsapp-button"
            href={createWhatsAppLink(
              `Hi! I'd like to book the 'Double Refresh' combo service.\n\nIncludes:\n- Car Wash + Home Clean Combo\n- Perfect for weekends & events\n\nPricing: R600`
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Book via WhatsApp
          </a>

          <a
            className="email-button"
            href="mailto:Reasonableservices777@gmail.com?subject=Booking%20Request:%20Double%20Refresh&body=Hi!%20I%20would%20like%20to%20book%20the%20'Double%20Refresh'%20combo%20service.%0AIncludes:%0A- Car Wash + Home Clean Combo%0A- Perfect for weekends and events%0APricing: R600"
          >
            <MdEmail /> Book via Email
          </a>
        </div>

      </div>
    </div>
  );
}

export default ServicesPage;


