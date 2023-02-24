import { TextField } from '@mui/material';
import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  padding: 26px;
  width: 250px;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  background-color: #f6fbf9;
  font-family: 'Karla';
  gap: 12px;
  margin: 10% auto;
  @media screen and (min-width: 700px) {
    width: 450px;
  }
`;

export const FormInput = styled(TextField)`
  width: 220px;
  background-color: #fff;
  @media screen and (min-width: 700px) {
    width: 300px;
  }
`;

export const FormTitle = styled.h2`
  color: #212b27;
  margin: 0px;
  font-size: 32px;
  text-align: center;
`;

export const FormInfo = styled.p`
  margin: 0;
  color: #32403b;
  width: 260px;
  font-size: 13px;
  line-height: 1.30;
  text-align: center;
`;

export const FormBtn = styled.button`
  display: block;
  background-color: #038bfa;
  color: #fff;
  border: none;
  width: 130px;
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