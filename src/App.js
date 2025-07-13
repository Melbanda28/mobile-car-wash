import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import OurStoryPage from './pages/OurStoryPage';

function AppWrapper() {
  const [scrollTo, setScrollTo] = useState(null);

  return (
    <Router>
      <Navbar setScrollTo={setScrollTo} />
      <Routes>
        <Route path="/" element={<HomePage scrollTo={scrollTo} />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;


