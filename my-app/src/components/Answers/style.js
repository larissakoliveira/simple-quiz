import styled from "styled-components";

export const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin: 7px auto;
  }

  h1,
  h2 {
    text-align: center;
    padding: 10px;
    color: #afb5d8;
  }

  h3,
  p {
    padding: 3px;
    color: #afb5d8;
    margin-left: 15px;
  }

  @media only screen and (min-width: 768px) {
    h3 {
      font-size: 18px;
    }
  }
`;
