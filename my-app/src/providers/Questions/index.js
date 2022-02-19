import { createContext, useState } from "react";
import api from "../../services/api";

export const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  // const [options, setOptions] = useState([]);
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

  const questionsThatHaveMoreThanFourAnswers = () => {
    data &&
      Object.values(data).map((item) => {
        for (let [key, value] of Object.entries(item["answers"])) {
          if (key === "answer_d" && value != null) {
            questions.push(item);
          }
        }
      });
  };


  // const getPossibleAnswers = () => {
  //   questions &&
  //     Object.values(questions).map((item) => {
  //       const auxiliarArray = [];
  //       for (let value of Object.values(item["answers"])) {
  //         if (value != null) {
  //           auxiliarArray.push(value);
  //         }
  //       }
  //       options.push(auxiliarArray);
  //     });
  // };

  const getNextQuestion = () => {
    setNextQuestionIndex(nextQuestionIndex + 1);
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
