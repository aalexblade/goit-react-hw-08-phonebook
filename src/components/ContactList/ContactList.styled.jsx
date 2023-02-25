import styled from 'styled-components';

export const ListBtn = styled.button`
  display: block;
  background-color: #038bfa;
  color: #ffffff;
  border: none;
  width: 130px;
  height: 34px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 20%);
  :hover {
    background-color: #038bfa;
    box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 50%);
  }
`;

export const ListWrapper = styled.ul`
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 17px;
  gap: 16px;
`;

export const ContactInfo = styled.p`
  width: 140px;
`;

export const ModalWrapper = styled.div`
  background-color: #449be2;
  text-align: center;
  padding: 16px;
  border-radius: 18px;
  color: #fff;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 26px;
`;

export const ModalBtn = styled.button`
  display: block;
  background-color: #038bfa;
  color: #fff;
  border: none;
  width: 100px;
  height: 34px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    background-color: #038bfa;
    box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 50%);
  }
`;

export const ModalTitle = styled.h2`
  margin-top: 0;
`;
