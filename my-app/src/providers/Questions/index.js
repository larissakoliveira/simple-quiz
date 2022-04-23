import { createContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

export const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [data, setData] = useState("");
  const [level, setLevel] = useState("easy");
  const [showComponent, setShowComponent] = useState("home");
  const [loading, setLoading] = useState(true);
  const [nextQuestionIndex, setNextQuestionIndex] = useState(0);
  const [questionsText, setQuestionsText] = useState([]);
  const [correctAnswerText, setCorrectAnswerText] = useState([]);
  const [score, setScore] = useState(0);

  const getQuiz = async () => {
    setLoading(true);
    await api
      .get(`/questions?difficulty=${level}`, {
        headers: {
          "X-API-Key": "7i20PPyZlYkPlzj7MR0SIHgzsvZTIDu995swtpuN"
        }
      })
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const questionsWithFourAnswersAndNoMultipleAnswers = () => {
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
        const filteredQuestions = auxArray
          .filter((item) => item.multiple_correct_answers === "false")
          .slice(0, 10);
        setQuestions(filteredQuestions);
      });
  };

  const handleAnswer = (item) => {
    const correctAnswers = [];
    questions &&
      Object.values(questions).map((item) => {
        for (let [key, value] of Object.entries(item["correct_answers"])) {
          if (value === "true" && value !== null) {
            correctAnswers.push(key.slice(7, -8));
          }
        }
      });
    const correctLetter = item.split("_").pop();
    checkPlayerAnswersAndScore(
      correctLetter,
      correctAnswers[nextQuestionIndex]
    );
    getTextRightAnswers(correctAnswers[nextQuestionIndex]);
    getNextQuestion();
  };

  const checkPlayerAnswersAndScore = (playerAnswer, eachCorrectAnswer) => {
    if (playerAnswer) {
      if (playerAnswer === eachCorrectAnswer) {
        setScore(score + 1);
        toast.success('Great, right answer!"');
      } else {
        toast.error("Ops, wrong answer!");
      }
    }
  };

  const getTextRightAnswers = (eachCorrectAnswer) => {
    const answersObj = questions[nextQuestionIndex].answers;
    answersObj &&
      Object.entries(answersObj).map(([key, value]) => {
        const letterAnswer = key.split("_").pop();
        if (letterAnswer === eachCorrectAnswer) {
          setCorrectAnswerText([...correctAnswerText, value]);
          return value;
        }
      });
  };

  const getNextQuestion = () => {
    setNextQuestionIndex(nextQuestionIndex + 1);
    setQuestionsText([
      ...questionsText,
      questions[nextQuestionIndex]["question"]
    ]);
  };

  const getAnswers = () => {
    setShowComponent("answer");
    setNextQuestionIndex(0);
    setData("");
  };

  const restartQuiz = () => {
    setShowComponent("quiz");
    setNextQuestionIndex(0);
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
        questionsWithFourAnswersAndNoMultipleAnswers,
        setQuestions,
        handleAnswer,
        setQuestionsText,
        setScore,
        getTextRightAnswers,
        setCorrectAnswerText,
        showComponent,
        questionsText,
        nextQuestionIndex,
        correctAnswerText,
        questions,
        loading,
        level,
        score
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};
