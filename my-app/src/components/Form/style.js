import styled from "styled-components";

export const FormSection = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  padding: 15px;

  input {
    border-radius: 5px;
    padding: 5px;
    font-size: 14px;
  }

  select {
    max-width: 50%;
    border-radius: 10px;
    font-weight: bold;
    padding: 5px;
    cursor: pointer;
    text-align: center;
  }

`;



export const Button = styled.button`
  width: 10em;
  font-weight: bold;
  background-color: #932010;
  padding: 7px;
  cursor: pointer;
  border-radius: 10px;
`;
