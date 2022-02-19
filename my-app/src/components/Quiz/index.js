import { useContext } from "react";
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
console.log(questions)
console.log(questions[nextQuestionIndex])

  return (
    <QuizContainer>
      <h3 className='level'>LEVEL: {level}</h3>
      <h2 className="questionTitle">Question {nextQuestionIndex + 1}</h2>

      {loading && <h2>Loading</h2>}

      <h3>{questions[nextQuestionIndex]["question"]}</h3>
      <OptionsContainer>
        {/* {questions &&
          Object.values(questions[nextQuestionIndex]).map((item, index) => {
            for (let value of Object.values(item["answers"])) {
              if (value != null) {
                <Button key={index}>{value}</Button>;
              }
            }
          })} */}
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
