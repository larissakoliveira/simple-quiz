import { useContext } from "react";
import { PlayerDataContext } from "../../providers/PlayerData";
import { QuestionsContext } from "../../providers/Questions";
import { AnswersContainer } from "./style";
import { Button } from "../Form/style";

const Answers = () => {
  const {
    setShowComponent,
    getQuiz,
    setNextQuestionIndex,
    setQuestions,
    questionsText,
    setQuestionsText,
    setPlayerAnswer,
    score,
    correctAnswerText,
    setScore,
    restartQuiz,
    setCorrectAnswerText
  } = useContext(QuestionsContext);
  const { setName } = useContext(PlayerDataContext);

  const getNewPlayer = () => {
    setQuestions([]);
    setShowComponent("home");
    setName("");
    setPlayerAnswer("");
    setCorrectAnswerText([]);       //nao ta limpando 
    setQuestionsText([]);
    setNextQuestionIndex(0);
    setScore(0);
    getQuiz();
  };

  return (
    <AnswersContainer>
      <h2>
        You got <span>{score}</span> out of 10
      </h2>
      <h2>Check the answers</h2>
      {questionsText &&
        questionsText.map((question, index) => (
          <h3 key={index}>
            {index + 1} {"->"} {question}
          </h3>
        )) &&
        correctAnswerText.map((answer, index) => <h3 key={index}>{answer}</h3>)
        
        }

      <Button onClick={restartQuiz}>Restart</Button>
      <Button onClick={getNewPlayer}>New player</Button>
    </AnswersContainer>
  );
};

export default Answers;
