import { PlayerDataProvider } from "./PlayerData";
import { QuestionsProvider } from "./Questions";

const Providers = ({ children }) => {
  return (
      <PlayerDataProvider>
        <QuestionsProvider>
          {children}
        </QuestionsProvider>
      </PlayerDataProvider>
  );
};
export default Providers;
