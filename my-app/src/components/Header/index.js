import { useContext } from "react";
import { QuestionsContext } from "../../providers/Questions";
import { PlayerDataContext } from "../../providers/PlayerData";
import { DivHeader } from "./style";



const Header = () => {

  const { showComponent} = useContext(QuestionsContext);
  const { name } = useContext(PlayerDataContext);

  return (
    <>    
      {showComponent === "home" ? (
        <DivHeader>
          <h1>Welcome to ECONOQUIZ</h1>
        </DivHeader>
      ) : (
          <DivHeader>
            <h2>{name}</h2>
          </DivHeader>
      )}
    </>
  );
};

export default Header;