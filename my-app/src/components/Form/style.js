import styled from "styled-components";

export const FormSection = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;

  img{
    width: 150px;
    opacity: 0.5;
    border-radius: 50%;
    margin: 25px;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  padding: 15px;

  input {
    border-radius: 8px;
    padding: 5px;
    font-size: 14px;
    margin-top: 10px;
  }

  input[type="text"]{
    background-color: #C4C4DA;
    color: black;
    border: solid #512943 2px;
  }

  select {
    max-width: 70%;
    border-radius: 10px;
    font-weight: bold;
    padding: 5px;
    margin: 8px;
    cursor: pointer;
    text-align: center;
    background-color: #C4C4DA;
    border: solid #512943 2px;
  }

`;

export const Button = styled.button`
  width: 10em;
  font-weight: bold;
  background-color: #C19FC9;
  opacity: 0.9;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  color: #000000;
  font-size: 15px;
  
  &:hover{
    background-color: #ffffff;
  }
`;
