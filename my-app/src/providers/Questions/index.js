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
  const [correctAnswersByKey, setCorrectAnswersByKey] = useState([]);
  const [questionsText, setQuestionsText] = useState([]);
  const [playerAnswer, setPlayerAnswer] = useState("");
  const [updateGetQuiz, setupdateGetQuiz] = useState(false);
  const [eachCorrectAnswer, setEachCorrectAnswer] = useState("");
  const [correctAnswerText, setCorrectAnswerText] = useState([]);
  const [score, setScore] = useState(0);

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

    
    
    const handleAnswer = (item) => {
      const correctLetter = item.split("_").pop();
      setPlayerAnswer(correctLetter)
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
    
    const checkPlayerAnswersAndScore = () => {
      if(playerAnswer){
        if (playerAnswer === eachCorrectAnswer) {
          console.log(playerAnswer, "jogador resposta")
          console.log(eachCorrectAnswer, "correta resposta")
          
          setScore(score + 1);
          
        }
      }
    };
    

  const getTextRightAnswers = () => {
    const answersObj = filterQuestion[nextQuestionIndex].answers

    answersObj && Object.entries(answersObj).map(([key, value]) => {
      
      const letterAnswer = key.split("_").pop()
      if(letterAnswer === eachCorrectAnswer){
        setCorrectAnswerText([...correctAnswerText, value])
      }
    })
  }


  const getNextQuestion = () => {
    setNextQuestionIndex(nextQuestionIndex + 1);
    getCorrectAnswersByKey();
    // setupdateGetQuiz(!updateGetQuiz);
    getTextRightAnswers();
    setQuestionsText([
      ...questionsText,
      filterQuestion[nextQuestionIndex]["question"],
    ]);
    checkPlayerAnswersAndScore();
    // filterQuestion[nextQuestionIndex];
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
    setCorrectAnswerText([]);
    setScore(0);
    getQuiz();
  };
  
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
        getTextRightAnswers,
        setCorrectAnswerText,
        showComponent,
        loading,
        nextQuestionIndex,
        correctAnswerText,
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
