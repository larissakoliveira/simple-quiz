import { useContext } from "react";
import { PlayerDataContext } from "../../providers/PlayerData";
import { QuestionsContext } from "../../providers/Questions";
import { AnswersContainer } from "./style";
import { Button } from "../Form/style";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CgArrowRight } from "react-icons/cg";

const Answers = () => {
  const {
    score,
    getQuiz,
    setQuestions,
    questionsText,
    setQuestionsText,
    correctAnswerText,
    setScore,
    restartQuiz,
    setShowComponent,
    setNextQuestionIndex,
    setCorrectAnswerText,
    setLevel
  } = useContext(QuestionsContext);
  const { setName } = useContext(PlayerDataContext);

  const getNewPlayer = () => {
    setShowComponent("home");
    setNextQuestionIndex(0);
    setQuestionsText([]);
    setCorrectAnswerText([]);
    setQuestions([]);
    setName("");
    setScore(0);
    setLevel("easy");
    getQuiz();
  };

  const questionsAndAnswers = {};
  questionsText.forEach(
    (key, value) => (questionsAndAnswers[key] = correctAnswerText[value])
  );

  return (
    <AnswersContainer>
      <h2>
        You got <span className="score">{score}</span> out of 10
      </h2>
      <h2>Check the answers</h2>

      {Object.entries(questionsAndAnswers).map(([question, answer], index) => (
        <div className="answerQuestionContainer" key={question}>
          <h3 key={question}>
            Question {index + 1}
            <span className="question">
              <FaLongArrowAltRight />
            </span>
            {question}
          </h3>
          <p key={answer}>
            Answer
            <span className="answer">
              <CgArrowRight /> {answer}
            </span>
          </p>
        </div>
      ))}

      <Button onClick={restartQuiz}>Restart</Button>
      <Button onClick={getNewPlayer}>New player</Button>
    </AnswersContainer>
  );
};

export default Answers;
