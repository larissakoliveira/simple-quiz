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
  const [score, setScore] = useState(0);
  const [correctAnswersByText, setCorrectAnswersByText] = useState([]);
  const [correctAnswersByKey, setCorrectAnswersByKey] = useState([]);
  const [questionsText, setQuestionsText] = useState([]);
  const [playerAnswer, setPlayerAnswer] = useState([]);

  const getQuiz = async () => {
    setLoading(true);
    await api
      .get(`/questions?difficulty=${level}`, {
        headers: {
          "X-API-Key": "x5yYMkHgQ0xhz7Q7RD1CfTQESV5gXkBwlfcuNFed",
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
    const auxArray = []
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
      })
  }

  const handleAnswer = (item) => {
    // console.log(item)
    // const checkAnswer = questions[nextQuestionIndex]["correct_answers"];

    // Object.entries(checkAnswer).map(([key, value]) => {
    //   const keyAnswers = key.slice(0, 8)

    //   if (item === keyAnswers && value === true) {
       
    //     // console.log("deu bom")
    //   }
    //   else{
    //     // console.log("deu ruim")
    //   }
    // })
   setPlayerAnswer([...playerAnswer, item])
    getNextQuestion()
  }

//   const getCorrectAnswersByKey = () =>{
//     const auxArray = []
//     const answers = questions[nextQuestionIndex]["correct_answers"]
//     // {answer_a_correct: 'false', answer_b_correct: 'false', answer_c_correct: 'true', answer_d_correct: 'false', answer_e_correct: 'false', …}
//     answers && Object.entries(questions[nextQuestionIndex]).map((item) => {
//       item && Object.entries(item["correct_answers"]).map(([key, value]) => {
//                         // answer_b_correct true
//       if(value === true){
//         auxArray.push(key.slice(0,8))
//       }
//     })
    
//     setCorrectAnswersByKey(auxArray)
//   })
// }
//   console.log(correctAnswersByKey)

  const getCorrectAnswersByKey = () =>{

    const auxArray = []
    // {answer_a_correct: 'false', answer_b_correct: 'false', answer_c_correct: 'true', answer_d_correct: 'false', answer_e_correct: 'false', …}
    // questions &&  Object.values(data).map((item) => {
    //   console.log(item["correct_answers"])
    //   for (let [key, value] of Object.entries(item["correct_answers"])) {
    //     if(value === 'true' && value !== null){
    //       auxArray.push(key.slice(0,8))
    //     }
    //    }
    //                     // answer_b_correct true
    // })
    setCorrectAnswersByKey(auxArray)
  }
  console.log(correctAnswersByKey)
  console.log(questions[nextQuestionIndex])

  // const getCorrectAnswersText = () => {
    // const answers = questions[nextQuestionIndex]["answers"]
  //       setCorrectAnswers()
  // }

  const getNextQuestion = () => {
    setNextQuestionIndex(nextQuestionIndex + 1);
    getCorrectAnswersByKey()
    setQuestionsText([...questionsText, questions[nextQuestionIndex]["question"]])
    return questions[nextQuestionIndex];
  };

  const getAnswers = () => {
    setShowComponent("answer");
    setNextQuestionIndex(0);
    // setQuestionsText([...questionsText, questions[nextQuestionIndex]["question"]])
    setData("");
    // getCorrectAnswersText();
  };

  const restartQuiz = () => {
    setShowComponent("quiz");
    setNextQuestionIndex(0);
    setPlayerAnswer([])
    setCorrectAnswersByKey([])
    setQuestionsText([])
    getQuiz()
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
        restartQuiz,
        loading,
        getNextQuestion,
        nextQuestionIndex,
        questions,
        setNextQuestionIndex,
        questionsThatHaveMoreThanFourAnswers,
        setQuestions,
        handleAnswer,
        questionsText,
        setQuestionsText,
        setPlayerAnswer
        // getCorrectAnswersText
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};
