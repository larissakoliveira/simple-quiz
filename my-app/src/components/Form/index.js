import { useContext, useEffect } from "react";
import { PlayerDataContext } from "../../providers/PlayerData";
import { QuestionsContext } from "../../providers/Questions";
import { FormSection, StyledLabel, Button } from "./style";
import brainHomeImage from "../../assets/homeImage.webp";

const Form = () => {
  const { setName, name } = useContext(PlayerDataContext);
  const {
    setLevel,
    getQuiz,
    updateGetQuiz,
    setShowComponent,
    questionsThatHaveMoreThanFourAnswers,
  } = useContext(QuestionsContext);

  useEffect(() => {
    getQuiz();
  }, [updateGetQuiz]);

  const handleSubmit = (e) => {
    if (!name) {
      return "";
    } else {
      e.preventDefault();
      setShowComponent("quiz");
      getQuiz();
      questionsThatHaveMoreThanFourAnswers();
    }
  };

  return (
    <FormSection>
      <img src={brainHomeImage} alt="brainHomeImage" />
      <StyledLabel>
        Please, enter your name!
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          type="text"
          name="name"
        />
      </StyledLabel>
      <StyledLabel>
        Select your level
        <select onChange={(e) => setLevel(e.target.value)}>
          <option value="easy" defaultValue="easy">
            EASY
          </option>
          <option value="hard">HARD</option>
        </select>
      </StyledLabel>
      <Button onClick={(e) => handleSubmit(e)}>START</Button>
    </FormSection>
  );
};

export default Form;
