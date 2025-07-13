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
            In a world where many go without work and some even without daily bread, Myself and my Spouse decided to be the change we want to see.
            That’s how Reasonable Services Company was born—an affordable mobile car wash and cleaning service with a purpose beyond profit.
            <br /><br />
            Our team is small but mighty: three dedicated women from different families, including our hands-on manager, who runs the business while I work remotely.
            These women were previously unemployed mothers with little to no income. Today, they earn with dignity and provide for their families through honest, hard work.
            <br /><br />
            <strong>Our pricing is simple and community-minded:</strong><br />
            Small Car Wash – R150<br />
            SUV Wash – R200<br />
            House/Office Cleaning – R450<br /><br />
            From each R150 earned for a small car wash:<br />
            • R50 goes to the two ladies doing the cleaning<br />
            • R50 to our manager (who uses her own car for transportation)<br />
            • R50 helps cover equipment and supply costs
          </p>
        </div>

        <div className="story-box">
          <p>
            It might not sound like a lot, but every single service makes a real impact.
            <br /><br />
            When you hire us:<br />
            Even with just one car wash, the ladies go home with money to buy bread and maybe some vegetables from a local vendor.
            That one car wash helps feed five families, including the veggie seller and the tuckshop that sells the bread.
            <br /><br />
            So when you hire us, you’re not just getting your car cleaned—you’re helping real families put food on the table.
            You are making a big difference without even knowing it.
            <br /><br />
            We believe more small businesses and more jobs are the key to reducing crime and helping our communities grow stronger.
            <br /><br />
            <strong>Thank you for your support!</strong>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OurStoryPage;
