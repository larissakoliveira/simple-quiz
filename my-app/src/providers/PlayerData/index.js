import { createContext, useState } from "react";

export const PlayerDataContext = createContext();
export const PlayerDataProvider = ({ children }) => {
  const [name, setName] = useState("");

  return (
    <PlayerDataContext.Provider
      value={{
        name,
        setName
      }}
    >
      {children}
    </PlayerDataContext.Provider>
  );
};
