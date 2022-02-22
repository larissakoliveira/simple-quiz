import Header from "./components/Header";
import Form from "./components/Form";
import Quiz from "./components/Quiz";
import "./App.css";
import { useContext } from "react";
import Answers from "./components/Answers";
import { QuestionsContext } from "./providers/Questions";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const { showComponent } = useContext(QuestionsContext);

  return (
    <div className="App">
      <ToastContainer
      position="bottom-left"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      type='sucess'
      rtl={false}
      pauseOnFocusLoss
      theme='colored'
      draggable
      pauseOnHover
      />
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
