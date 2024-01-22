import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const FavoriteSVG = styled(ReactSVG)`
  background: transparent;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;

  &:hover {
    transform: scale(1.5);
    
  }
`;
