import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNavWrapper = styled.div`
    display: flex;
    gap: 12px;
`;

export const AuthNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  :hover,
  :active {
    color: #038bfa;
  }
  &.active {
    color: #038bfa;
  }
`;