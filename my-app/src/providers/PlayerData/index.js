import { createContext, useState } from "react";

export const PlayerDataContext = createContext();

export const PlayerDataProvider = ({ children }) => {

  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  

  return (
    <PlayerDataContext.Provider
      value={{
        name,
        setName,
        score,
        setScore
      }}
    >
      {children}
    </PlayerDataContext.Provider>
  );
};
