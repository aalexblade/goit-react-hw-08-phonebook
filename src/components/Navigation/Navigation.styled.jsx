import styled from "styled-components";
import { Typography } from '@mui/material';
import { NavLink } from "react-router-dom";

export const LogoText = styled(Typography)`
  display: flex !important;
  @media screen and (max-width: 700px) {
    display: none !important;
  }
`;

export const HomeLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
`;

export const NavWrapper = styled.nav`
  display: flex;
  color: #fff;
  gap: 18px;
`;

export const NavItem = styled(NavLink)`
  align-self: center;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  &.active {
    color: #81d4fa;
  }
  :hover,
  :active {
    color: #81d4fa;
  }
`;