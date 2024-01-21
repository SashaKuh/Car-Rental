import styled from 'styled-components';

export const AllFilter = styled.div`
  gap: 18px;
  display: flex;
  max-width: 1440px;
  padding: 0 115px;
  padding-top: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
`;

export const SearchBtn = styled.button`
  width: 136px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 44px;
  align-self: flex-end;
  flex-shrink: 0;
  border: none;
  border-radius: 12px;
  background-color: #3470ff;
  
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  text-decoration: none;
  color: #fff;
  
  cursor: pointer;

  &:hover {
    background-color: #0b44cd;
  }
`;