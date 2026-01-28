 import React from 'react';
import './OurStoryPage.css';
import Footer from '../components/Footer';

function OurStoryPage() {
  return (
    <div className="our-story-page">
      <h1>Our Story</h1>
      <div className="story-container">
        <div className="story-box">
          <p>
           In a world where many go without work and some even without daily bread, 
           myself and my spouse decided to be the change we want to see. That’s how Reasonable Services Company was born, 
           an affordable mobile car wash and cleaning service with a purpose beyond profit.
            <br /><br />
            We are proudly based in Muizenberg, Cape Town, offering reliable and affordable services to homes,
             offices, and property owners who need quality work they can trust.
            <br /><br />
            <h3><strong>More Than Just a Service:</strong></h3>
            Reasonable Services Company is built on dignity, opportunity, and community impact.
            <br />
            Our team is small but mighty: three hardworking women from different families, 
            including our hands-on manager who runs the business while I work remotely. 
            These women were previously unemployed mothers with little to no income. 
            Today, they earn honestly through consistent work, providing for their families with pride.
          </p>
        </div>

        <div className="story-box">
          <p>
            <h3>How Your Booking Makes a Difference </h3>
            Our pricing is simple and community-minded. Every service you book supports real families.
           <br/> <br/>
            From each small car wash or Home Clean, the income is shared between the team members doing the work, 
            our manager (who uses her own car for transport), and the equipment/supplies needed to keep the business running smoothly.
            <br /><br />
           Even one booking can mean bread on the table, groceries for the week, and hope for families who are working hard to build a better life.
            <br /><br />
            <h3> Our Mission</h3>
           To provide affordable, high-quality mobile car wash and cleaning services, while creating employment opportunities 
           and strengthening our community, one job at a time.
            <br /><br />
            When you hire Reasonable Services Company, you’re not just paying for a clean car or a fresh home, you’re supporting hardworking women and helping families thrive.
            <br/>
            <strong>Thank you for Choosing us and Being part of Change!</strong>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OurStoryPage;
