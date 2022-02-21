import { useContext } from "react";
import { QuestionsContext } from "../../providers/Questions";
import { QuizContainer, OptionsContainer } from "./style";
import { Button } from "../Form/style";
import notGood from "../../assets/notgood.gif";
import stillBad from "../../assets/stillBad.gif";
import notBad from "../../assets/notBad.webp";
import great from "../../assets/great.webp";
import theBest from "../../assets/theBest.webp";

const Quiz = () => {
  const {
    level,
    getAnswers,
    loading,
    score,
    nextQuestionIndex,
    filterQuestion,
    handleAnswer,
  } = useContext(QuestionsContext);

  return (
    <QuizContainer>
      <h3 className="level">LEVEL: {level}</h3>

      {loading && <h2 className="loading">LOADING YOUR QUIZ...</h2>}
      {nextQuestionIndex < 10 ? (
        <>
          <h2 className="questionTitle">Question {nextQuestionIndex + 1}</h2>

          <h3>{filterQuestion[nextQuestionIndex]["question"]}</h3>
        </>
      ) : (
        <>
          {score < 3 ? (
            <>
              <img src={notGood} alt="notGood" />
              <h2>Not good! Come on, you can do better!</h2>
            </>
          ) : score >= 3 && score <= 5 ? (
            <>
              <img src={stillBad} alt="stillBad" />
              <h2>Sorry, still bad, keep studying!</h2>
            </>
          ) : score > 5 && score < 8 ? (
            <>
              <img src={notBad} alt="notBad" />
              <h2>You see? Never give up! Congrats!</h2>
            </>
          ) : score > 7 && score < 10 ? (
            <>
              <img src={great} alt="great" />
              <h2>Wow! That was great!</h2>
            </>
          ) : (
            <>
              <img src={theBest} alt="theBest" />
              <h2>Wait! Whaaaŧ!? {score}? No one can beat you! Awesome</h2>
            </>
          )}

          <h2>Final score {score}</h2>
        </>
      )}
      <OptionsContainer>
        {nextQuestionIndex < 10 ? (
          Object.entries(filterQuestion[nextQuestionIndex]["answers"]).map(
            ([key, value]) => (
              <button
                className="options"
                key={key}
                onClick={() => handleAnswer(key)}
              >
                {value}
              </button>
            )
          )
        ) : (
          <Button className="checkAnswers" onClick={getAnswers}>
            CHECK THE ANSWERS
          </Button>
        )}
      </OptionsContainer>
    </QuizContainer>
  );
};

export default Quiz;
