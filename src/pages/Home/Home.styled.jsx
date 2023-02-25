import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 24px;
`;

export const HeroTitle = styled.h1`
  font-weight: 500;
  font-size: 48px;
  text-align: center;
  color: #fff;
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 120px;
  @media screen and (max-width: 900px) {
    gap: 18px;
    flex-direction: column;
  }
`;

export const Info = styled.p`
  font-size: 22px;
  color: #fff;
  width: 350px;
  line-height: normal;
  text-align: center;
`;

export const BtnList = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;
  justify-content: center;
  padding: 0;
`;

export const RegisterInfo = styled.p`
  font-size: 22px;
  width: 350px;
  text-align: center;
  color: #fff;
  margin-bottom: 44px;
  line-height: normal;
`;

export const HeroBtn = styled(Link)`
  background-color: #038bfa;
  text-decoration: none;
  padding: 10px 24px;
  border-radius: 12px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  :hover,
  :active {
    box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 50%);
  }
`;
