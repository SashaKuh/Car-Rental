import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.nav`
    border-bottom: solid 1px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NavLinkBtn = styled(NavLink)`
      display: flex;
    gap: 8px;
    align-items: center;
    padding: 8px 0;
    cursor: pointer;
    color: black;
    width: 103px;
    justify-content: center;

  &.active { 
    background: #0e0e0e;
    color: white;
    border-radius: 2rem;
    padding: 10px 20px;
  }
`;

export const NavWrapper = styled.div`
    display: flex;
  align-items: center;
  gap: 16px;
`;
