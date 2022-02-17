// import { DivHeader } from "./style";
import api from "../../services/api";
import { useState } from "react";

const Quiz = () => {

    const [questions, setQuestions] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	
	const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
		}
        
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < 10) {
            setCurrentQuestion(nextQuestion);
		} else {
            setShowScore(true);
		}
	};
    api
    .get("/products")
    .then((response) => {
      setQuestions(response.data);
    })
    .catch((err) => {
      console.log(err);
    });


    return (
        <>
       <div>
			{showScore ? (
				<div>
					Você fez {score} de 10
				</div>
			) : (
				<>
					<div>
						<div>
							<span>Pergunta {currentQuestion + 1}</span>/10
						</div>
						<div>{questions[currentQuestion].questionText}</div>
					</div>
					<div>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
                            // #ver como é o retorno
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
        </>
    )
}


export default Quiz;