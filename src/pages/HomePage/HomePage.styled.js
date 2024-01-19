import styled from 'styled-components';

export const HomepageContainer = styled.div`
  /* Your global styles can go here */
`;

export const HeroSection = styled.section`
  text-align: center;
  padding: 100px 20px;

  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 30px;
  }

  a {
    display: inline-block;
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    text-decoration: none;
    font-size: 1.2em;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #2980b9;
    }
  }
`;

export const FeatureSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 50px 20px;
`;

export const Feature = styled.div`
  text-align: center;

  h2 {
    font-size: 1.8em;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1em;
  }
`;
