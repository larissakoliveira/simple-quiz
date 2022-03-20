import styled from "styled-components";

export const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin: 7px auto;
  }

  .score {
    color: #000000;
    opacity: 0.8;
    font-size: 3rem;
  }

  div {
    margin: 10px;
    border: 3px solid #afb5d8;
  }

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
    font-size: 16px;
  }

  p {
    color: #ffffff;
  }

  .question,
  .answer {
    margin-left: 15px;
    margin-right: 15px;
  }

  @media only screen and (min-width: 768px) {
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
      margin-left: 30px;
    }
  }
`;
