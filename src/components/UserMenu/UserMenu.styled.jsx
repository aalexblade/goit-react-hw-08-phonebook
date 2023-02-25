import styled from 'styled-components';

export const MenuWrapper = styled.div`
  font-weight: 500;
  display: flex;
  gap: 8px;
`;

export const MenuText = styled.p`
  margin: 0;
  align-self: center;

  @media screen and (max-width: 900px) {
    font-size: 12px;
    width: 112px;
  }
`;

export const MenuSettingItem = styled.p`
  margin: 0;
`;
