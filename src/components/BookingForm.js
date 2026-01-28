import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [service, setService] = useState('');
  const [datetime, setDatetime] = useState('');
  const [phone, setPhone] = useState('');

  const phoneNumber = '27767201554';

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !address || !service || !datetime || !phone) {
      alert('Please fill in all fields before confirming.');
      return;
    }

    const message = `Hello, I’d like to book a service with Reasonable Services.

Name: ${name}
Service: ${service}
Address: ${address}
Date & Time: ${datetime}
Phone: ${phone}`;

    // Open WhatsApp directly (no confirmation prompt)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="booking-form" id = "booking">
      <h2>Book a Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            placeholder="Full address for the service"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Service</label>
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Pick a service</option>
            <option value="Refresh My Ride">Refresh My Ride- Small Car</option>
             <option value="Refresh My Ride">Refresh My Ride - Suv</option>
            <option value="Refresh My House">Refresh My House- Mini Home Clean</option>
            <option value="Refresh My House">Refresh My House- Max Home Clean</option>
            <option value="Double Refresh">Double Refresh</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date & Time</label>
          <input
            type="datetime-local"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            placeholder="Your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-primary">Confirm Booking via WhatsApp</button>
      </form>
    </section>
  );
}

export default BookingForm;

