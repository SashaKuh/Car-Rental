import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomepageContainer = styled.div`
  display: flex;
    justify-content: center;
    gap: 150px;
    padding-top: 50px;
`;

export const CardLink = styled(Link)`
  width: 200px;
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

export const TrackerInfoContainer = styled.div`
  background-color: var(--secondaryGrey);
  padding: 24px 16px;
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding: 32px 24px;
    width: 446px;
  }
  @media screen and (min-width: 1440px) {
    padding: 32px 24px;
    margin-top: 34px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  line-height: 1.11;

  margin-bottom: 12px;
  color: #2F2F2F;
`;

export const InfoItems = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Roboto-regular';
  font-size: 16px;
  line-height: 1.25;

  &::before {
    content: '';
    border-color: var(--primaryBlue);
    border-style: solid;
    border-width: 0 8px 8px 0;
    border-radius: 50%;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
