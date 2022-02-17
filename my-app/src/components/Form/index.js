import { useState } from "react";
import { FormSection, StyledLabel, Button } from "./style";

const Main = () => {

  const [start, setStart] = useState(false);

  const startQuiz = () => {
    setStart(!start)
  }

  return (
    <FormSection>
      <StyledLabel>
        Digite seu nome
        <input required type="text" name="name" />
      </StyledLabel>
      <StyledLabel>
        Escolha seu nível
        <select>
          <option value="easy" selected="selected">
            Fácil
          </option>
          <option value="hard">Díficil</option>
        </select>
      </StyledLabel>
      <Button onClick={startQuiz}>Começar</Button>
    </FormSection>
  );
};

export default Main;
