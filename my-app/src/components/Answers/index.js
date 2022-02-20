import { useContext, useState } from "react";
import { PlayerDataContext } from "../../providers/PlayerData";
import { QuestionsContext } from "../../providers/Questions";
import { AnswersContainer } from "./style";
import { Button } from "../Form/style";

const Answers = () => {

  const {
    getNewQuiz,
    setShowComponent,
    getQuiz,
    setNextQuestionIndex,
    setQuestions,
    data,
    questions,
    nextQuestionIndex,
    questionsText,
    setQuestionsText,
    setPlayerAnswer,
    restartQuiz
  } = useContext(QuestionsContext);
  const { setName } = useContext(PlayerDataContext);

  const getNewPlayer = () => {
    setQuestions([]);
    setShowComponent("home");
    setName("");
    setPlayerAnswer('');
    setNextQuestionIndex(0);
    setQuestionsText([])
    getQuiz();
  }


  return (
    <AnswersContainer>
      <h2>
        You got <span>{}</span> out of 10
      </h2>
      <h2>Check the answers</h2>
      {questionsText.map((question, index) => (<h3 key={question}>{index+1} {'->'} {question}</h3>)) }

      <Button onClick={restartQuiz}>Restart</Button>
      <Button onClick={getNewPlayer}>New player</Button>
    </AnswersContainer>
  );
};

export default Answers;
