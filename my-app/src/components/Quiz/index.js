import { useContext, useState } from "react";
import { QuestionsContext } from "../../providers/Questions";
import { QuizContainer, OptionsContainer } from "./style";
import { Button } from "../Form/style";
import brainImage from "../../assets/homeImage.gif"

const Quiz = () => {
  const {
    level,
    getAnswers,
    loading,
    getNextQuestion,
    nextQuestionIndex,
    questions,
    handleAnswer,
  } = useContext(QuestionsContext);


  return (
    <QuizContainer>
      <h3 className="level">LEVEL: {level}</h3>

      {loading && <h2 className="loading">LOADING YOUR QUIZ...</h2>}
      { 
      nextQuestionIndex < 10 ? (
        <>
        <h2 className="questionTitle">Question {nextQuestionIndex + 1}</h2>

        <h3>{questions[nextQuestionIndex]["question"]}</h3>
        </>

      ): (
        <>
      <img src={brainImage} alt='brainImage'/>
      <h2>Final score {}</h2>
        </>
      )
      }
      <OptionsContainer>
        
        { nextQuestionIndex < 10 ? (
        Object.entries(questions[nextQuestionIndex]["answers"]).map(([key,value]) => (
          <button
          key={key}
          onClick={() => handleAnswer(key)}
          >
            {value}
          </button>
          ))) : (
            <Button onClick={getAnswers}>CHECK THE ANSWERS</Button>
            )
          }
        
      </OptionsContainer>

      {/* // {nextQuestionIndex < 9 ? (
      //   <Button onClick={getNextQuestion}>NEXT</Button>
      // ) : (
      //   <Button onClick={getAnswers}>FINISH</Button>
      // )} */}
    </QuizContainer>
  );
};

export default Quiz;
