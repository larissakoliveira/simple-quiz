import { useContext, useState } from "react";
import { QuestionsContext } from "../../providers/Questions";
import { QuizContainer, OptionsContainer } from "./style";
import { Button } from "../Form/style";


const Quiz = () => {
  const {
    level,
    getAnswers,
    loading,
    getNextQuestion,
    nextQuestionIndex,
    questions,
  } = useContext(QuestionsContext);

  // const [options, setOptions] = useState([])


  // const getOptions = () => {
  //   Object.values(questions[nextQuestionIndex]["answers"]).map((item) => {
  //           if (item != null){
  //             setOptions(item)
  //           }
  //         }
  //   )}


  return (
    <QuizContainer>
      <h3 className='level'>LEVEL: {level}</h3>
      <h2 className="questionTitle">Question {nextQuestionIndex + 1}</h2>

      {loading && <h2 className="loading">LOADING YOUR QUIZ...</h2>}

      <h3>{questions[nextQuestionIndex]["question"]}</h3>
      <OptionsContainer>
        { 
        
           Object.values(questions[nextQuestionIndex]["answers"])
          .map((item) => (
            // if (item == null) {
              <button>{item}</button>
              // }
            //   console.log(item)
            // console.log(Object.values(questions[nextQuestionIndex]["answers"]))
 
            // questions && Object.values(item["answers"]).map((value) => {
            // })
          ))
          }
      </OptionsContainer>

      {nextQuestionIndex < 9 ? (
        <Button onClick={getNextQuestion}>NEXT</Button>
      ) : (
        <Button onClick={getAnswers}>FINISH</Button>
      )}
    </QuizContainer>
  );
};

export default Quiz;
