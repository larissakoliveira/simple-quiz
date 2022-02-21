import styled from "styled-components";

export const QuizContainer = styled.div`
  padding: 20px;
  text-align: center;

  .options {
    border: solid black 2px;
    background-color: #5562b3;
    padding: 10px;
    margin: 10px auto;
    cursor: pointer;
    border-radius: 10px;
    font-weight: bold;
  }
  .options:hover {
    background-color: #afb5d8;
  }

  .questionTitle {
    margin: 10px 0;
    color: #ffff;
    font-size: 19px;
  }

  .level {
    margin: 0 0 20px;
    color: #afb5d8;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  .loading {
    color: #1934eb;
    padding: 70px;
  }

  img {
    width: 250px;
    border-radius: 50%;
  }

  h2 {
    padding: 10px;
  }

  h3,
  h2 {
    color: #afb5d8;
  }

  div {
    margin-top: 15px;
  }

  @media only screen and (min-width: 768px) {
    h3.level {
      margin: 0 50px 20px;
      text-align: right;
      display: hidden;
      font-size: 23px;
    }

    .questionTitle {
      margin: 30px 0;
      font-size: 23px;
    }
  }
`;

export const OptionsContainer = styled.div`
  display: inblock;

  button {
    margin: 10px auto;
    padding: 5px;
    width: 65vw;
    font-size: 15px;
  }

  .checkAnswers {
    width: 30vw;
  }

  @media only screen and (min-width: 768px) {
    button {
      width: 45vw;
      font-size: 18px;
    }
    .checkAnswers {
      width: 20vw;
    }
  }
`;
