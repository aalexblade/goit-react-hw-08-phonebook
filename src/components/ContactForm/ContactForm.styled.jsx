import styled from 'styled-components';

export const NameForm = styled.form`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormLabel = styled.label`
  display: inline-flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 19px;
`;

export const FormInput = styled.input`
  margin: 8px 0;
  width: 210px;
  height: 30px;
  border: none;
  border-radius: 6px;
  outline: none;
  font-size: 16px;
  padding: 2px 8px;
  box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 34%);
`;

export const SubmitBtn = styled.button`
  display: block;
  background-color: #038bfa;
  color: #fff;
  border: none;
  width: 142px;
  height: 38px;
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

export const PhoneBookWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 700px) {
    gap: 100px;
    flex-direction: row;
  }
  @media screen and (min-width: 900px) {
    gap: 230px;
  }
`;