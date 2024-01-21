import React from 'react';

import {
  HomepageContainer,
  HeroSection,
  InfoItems,
  TrackerInfoContainer,
  SubTitle,
  CardLink
} from './HomePage.styled';

const HomePage = () => {
  return (
    <HomepageContainer>
      
      
      
      <HeroSection>
        <h1>Rent Your Dream Car</h1>
        <p>Explore our collection of premium cars for rent.</p>
        <CardLink to="/catalog">View Cars</CardLink>
      </HeroSection>

      <TrackerInfoContainer>
          <SubTitle>Why drink water</SubTitle>
          <ul>
            <InfoItems>Supply of nutrients to all organs</InfoItems>
            <InfoItems>Providing oxygen to the lungs</InfoItems>
            <InfoItems>Maintaining the work of the heart</InfoItems>
            <InfoItems>Release of processed substances</InfoItems>
            <InfoItems>
              Ensuring the stabiInfoItemsty of the internal environment
            </InfoItems>
            <InfoItems>Maintaining within the normal temperature</InfoItems>
            <InfoItems>
              Maintaining an immune system capable of resisting disease
            </InfoItems>
          </ul>
        </TrackerInfoContainer>

      
    </HomepageContainer>
  );
};

export default HomePage;
