import { createContext, useState } from "react";
import api from "../../services/api";

export const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [data, setData] = useState("data");
  const [level, setLevel] = useState("Easy");
  const [showComponent, setShowComponent] = useState("home");
  const [loading, setLoading] = useState(true);
  const [nextQuestionIndex, setNextQuestionIndex] = useState(0);

  const getQuiz = async () => {
    setLoading(true);
    setData("data");
    await api
      .get(`/questions?difficulty=${level}`, {
        headers: {
          "X-API-Key": "x5yYMkHgQ0xhz7Q7RD1CfTQESV5gXkBwlfcuNFed",
        },
      })
      .then((response) => {
        setLoading(false);
        setData(response.data);
        questionsThatHaveMoreThanFourAnswers();
      })
      .catch((error) => {
        console.log(error);
      });
  };
// console.log(data)
  const questionsThatHaveMoreThanFourAnswers = () => {
    data &&
      Object.values(data).map((item) => {   
        console.log(item)
        for (let [key, value] of Object.entries(item["answers"])) {
          delete item["answers"]["answer_f"]; 
          delete item["answers"]["answer_e"]; 
          // console.log(item["answers"])
          if (key === "answer_d" && value != null) { 
            setQuestions([...questions,item])
            console.log(item)
            console.log(questions)
            console.log(questions[nextQuestionIndex]["question"])
            console.log(questions[nextQuestionIndex]["answers"])
          }
        }
      });
  };


  const getNextQuestion = () => {
    questionsThatHaveMoreThanFourAnswers()
    setNextQuestionIndex(nextQuestionIndex + 1);
    return questions[nextQuestionIndex]
  };

  const getAnswers = () => {
    setShowComponent("answer");
  };

  const getNewQuiz = () => {
    setShowComponent("quiz");
    setNextQuestionIndex(0);
  };

  return (
    <QuestionsContext.Provider
      value={{
        getQuiz,
        setLevel,
        data,
        level,
        getAnswers,
        setShowComponent,
        showComponent,
        getNewQuiz,
        loading,
        getNextQuestion,
        nextQuestionIndex,
        questions,
        setNextQuestionIndex,
        questionsThatHaveMoreThanFourAnswers,
        setQuestions,
        // getPossibleAnswers,
        // options,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};
