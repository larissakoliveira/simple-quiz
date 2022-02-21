import Header from "./components/Header";
import Form from "./components/Form";
import Quiz from "./components/Quiz";
import "./App.css";
import { useContext } from "react";
import Answers from "./components/Answers";
import { QuestionsContext } from "./providers/Questions";

export default function App() {
  const { showComponent } = useContext(QuestionsContext);

  return (
    <div className="App">
      <Header />
      {showComponent === "home" ? (
        <Form />
      ) : showComponent === "quiz" ? (
        <Quiz />
      ) : (
        <Answers />
      )}
    </div>
  );
}
