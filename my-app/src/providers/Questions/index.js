import { createContext, useState } from "react";
import api from "../../services/api";

export const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [data, setData] = useState("");
  const [level, setLevel] = useState("Easy");
  const [showComponent, setShowComponent] = useState("home");
  const [loading, setLoading] = useState(true);
  const [nextQuestionIndex, setNextQuestionIndex] = useState(0);
  const [score, setScore] = useState(1);
  const [correctAnswersByKey, setCorrectAnswersByKey] = useState([]);
  const [questionsText, setQuestionsText] = useState([]);
  const [playerAnswer, setPlayerAnswer] = useState("");
  const [updateGetQuiz, setupdateGetQuiz] = useState(false);
  const [eachCorrectAnswer, setEachCorrectAnswer] = useState([]);

  const getQuiz = async () => {
    setLoading(true);
    await api
      .get(`/questions?difficulty=${level}`, {
        headers: {
          "X-API-Key": "7i20PPyZlYkPlzj7MR0SIHgzsvZTIDu995swtpuN",
        },
      })
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const questionsThatHaveMoreThanFourAnswers = () => {
    const auxArray = [];
    data &&
      Object.values(data).map((item) => {
        for (let [key, value] of Object.entries(item["answers"])) {
          delete item["answers"]["answer_f"];
          delete item["answers"]["answer_e"];
          if (key === "answer_d" && value != null) {
            auxArray.push(item);
          }
        }
        setQuestions(auxArray);
      });
  };

  const filterQuestion =
    questions &&
    questions.filter((item) => item.multiple_correct_answers === "false");

  const checkPlayerAnswersAndScore = () => {
    if (correctAnswersByKey) {
      if (playerAnswer === eachCorrectAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleAnswer = (item) => {
    setPlayerAnswer(item.split("_").pop());
    getNextQuestion();
  };

  const getCorrectAnswersByKey = () => {
    const auxArrayCorrectAnswers = [];
    filterQuestion &&
      Object.values(filterQuestion).map((item) => {
        for (let [key, value] of Object.entries(item["correct_answers"])) {
          if (value === "true" && value !== null) {
            auxArrayCorrectAnswers.push(key.slice(7, -8));
          }
        }
      });
    setEachCorrectAnswer(auxArrayCorrectAnswers[nextQuestionIndex]);
  };

  const getNextQuestion = () => {
    setNextQuestionIndex(nextQuestionIndex + 1);
    getCorrectAnswersByKey();
    setupdateGetQuiz(!updateGetQuiz);
    setQuestionsText([
      ...questionsText,
      filterQuestion[nextQuestionIndex]["question"],
    ]);
    checkPlayerAnswersAndScore();
    return filterQuestion[nextQuestionIndex];
  };

  const getAnswers = () => {
    setShowComponent("answer");
    setNextQuestionIndex(0);
    setData("");
  };

  const restartQuiz = () => {
    setShowComponent("quiz");
    setNextQuestionIndex(0);
    setPlayerAnswer([]);
    setCorrectAnswersByKey([]);
    setQuestionsText([]);
    setScore(0);
    getQuiz();
  };
  
  console.log(filterQuestion)
  return (
    <QuestionsContext.Provider
      value={{
        getQuiz,
        setLevel,
        getAnswers,
        setShowComponent,
        restartQuiz,
        getNextQuestion,
        setNextQuestionIndex,
        questionsThatHaveMoreThanFourAnswers,
        setQuestions,
        handleAnswer,
        setQuestionsText,
        setPlayerAnswer,
        setScore,
        showComponent,
        loading,
        nextQuestionIndex,
        data,
        level,
        questionsText,
        score,
        updateGetQuiz,
        filterQuestion,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};
