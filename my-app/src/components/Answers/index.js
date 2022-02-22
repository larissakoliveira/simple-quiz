import { useContext } from "react";
import { PlayerDataContext } from "../../providers/PlayerData";
import { QuestionsContext } from "../../providers/Questions";
import { AnswersContainer, spanstyled } from "./style";
import { Button } from "../Form/style";
import { FaLongArrowAltRight } from 'react-icons/fa';
import { CgArrowRight } from 'react-icons/cg';



const Answers = () => {
  const {
    score,
    getQuiz,
    setQuestions,
    questionsText,
    setPlayerAnswer,
    setQuestionsText,
    correctAnswerText,
    setScore,
    restartQuiz,
    setShowComponent,
    setNextQuestionIndex,
    setCorrectAnswerText,
    randomcoloranswer
  } = useContext(QuestionsContext);
  const { setName } = useContext(PlayerDataContext);

  const getNewPlayer = () => {
    setShowComponent("home");
    setNextQuestionIndex(0);
    setQuestionsText([]);
    setCorrectAnswerText([]);
    setQuestions([]);
    setName("");
    setPlayerAnswer("");
    setScore(0);
    getQuiz();
  };

  const questionsAndAnswers = {}
  questionsText.forEach((key, value) => questionsAndAnswers[key] = correctAnswerText[value]);

  console.log(questionsAndAnswers)

  return (
    <AnswersContainer>
      <h2>
        You got <span className="score">{score}</span> out of 10
      </h2>
      <h2>Check the answers</h2>

      {
        Object.entries(questionsAndAnswers).map(([question, answer], index)=>(
          <div key={question}>
          <h3 key={question}>Question {index +1}<span className="question"> <FaLongArrowAltRight/></span>{question}</h3>
          <p key={answer}>Answer<span className="answer" randomcoloranswer ><CgArrowRight/> {answer}</span></p>
          </div>
        ))
      }

      <Button onClick={restartQuiz}>Restart</Button>
      <Button onClick={getNewPlayer}>New player</Button>
    </AnswersContainer>
  );
};

export default Answers;
