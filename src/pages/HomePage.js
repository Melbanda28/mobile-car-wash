 import React, { useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';

function HomePage({ scrollTo }) {
  const heroRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    if (scrollTo === 'hero' && heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (scrollTo === 'footer' && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollTo]);

  return (
    <>
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <ServicesSection />
      <BookingForm />
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
