import React from 'react';
import { Link } from 'react-router-dom';
import { HomepageContainer, HeroSection, FeatureSection, Feature } from './HomePage.styled';

const HomePage = () => {
  return (
    <HomepageContainer>
      
      
      
      <HeroSection>
        <h1>Rent Your Dream Car</h1>
        <p>Explore our collection of premium cars for rent.</p>
        <Link to="/catalog">View Cars</Link>
      </HeroSection>

      <FeatureSection>
        <Feature>
          <h2>Easy Booking</h2>
          <p>Book your car with just a few clicks. Simple and convenient.</p>
        </Feature>
        <Feature>
          <h2>Wide Selection</h2>
          <p>Choose from a diverse range of top-notch vehicles.</p>
        </Feature>
        <Feature>
          <h2>Flexible Plans</h2>
          <p>Customize your rental plan to suit your needs.</p>
        </Feature>
      </FeatureSection>

      
    </HomepageContainer>
  );
};

export default HomePage;
