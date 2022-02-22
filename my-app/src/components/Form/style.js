import styled from "styled-components";

export const FormSection = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;

  img {
    width: 200px;
    opacity: 0.8;
    border-radius: 50%;
    margin: 15px;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 50%;
  color: #afb5d8;
  align-items: center;
  padding: 15px;

  input {
    border-radius: 8px;
    padding: 5px;
    font-size: 14px;
    margin-top: 10px;
  }

  input[type="text"] {
    background-color: #c4c4da;
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
    background-color: #c4c4da;
    border: solid #512943 2px;
  }
`;

export const Button = styled.button`
  width: 10em;
  font-weight: bold;
  background-color: #afb5d8;
  opacity: 0.9;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  color: #000000;
  font-size: 15px;

  &:hover {
    background-color: #ffffff;
  }
`;
