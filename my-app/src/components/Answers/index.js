import { useContext } from "react";
import { PlayerDataContext } from "../../providers/PlayerData";
import { QuestionsContext } from "../../providers/Questions";
import { AnswersContainer } from "./style";
import { Button } from "../Form/style";

const Answers = () => {

    const { getNewQuiz, setShowComponent, setNextQuestionIndex, setQuestions, questions } = useContext(QuestionsContext);
    const { setName } = useContext(PlayerDataContext);

    const getNewPlayer = () => {
        setQuestions([])
          setShowComponent("home")
          setName("")
          setNextQuestionIndex(0)
        }

    return (
       
        <AnswersContainer>
        <h2>You got <span>{}</span> out of 10</h2>
        <h2>Check the answers</h2>


    {/* {questions && Object.values(questions["question"]).map((item) => {
        for (let [value] of Object.values(questions["answers"])) {
            <>
            <h4>{item}</h4>
            <h4>{value}</h4>
            </>
          
        }
      })
      } */}

        <Button onClick={getNewQuiz}>Restart</Button>
        <Button onClick={getNewPlayer}>New player</Button>
        </AnswersContainer>
    )

}

export default Answers