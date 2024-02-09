import React, { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import LoggedUser from "./components/LoggedUser";
import CharactersList from "./components/CharactersList";
import CharactersDetailsList from "./components/DetailsList";
import { PrimaryButton } from "@fluentui/react";
import LoadSaveToListButton from "./components/LoadSaveToListButton";

const App: React.FC = () => {

  const [isCardView, setIsCardView] = useState(true); // True pre zobrazenie kariet

  const toggleView = () => {
    setIsCardView(!isCardView);
  }

  return (
    <div className="app-container">
      <div className="hp-header">
        <WelcomeMessage />
        <LoggedUser />
      </div>
      <div >
        {/* <CharactersList /> */}
        <div className="buttons-navbar">
          <PrimaryButton onClick={toggleView} text={isCardView ? "Zobraz zoznam" : "Zobraz Karty"} />
          <LoadSaveToListButton />
        </div>
        {isCardView ? <CharactersList /> : <CharactersDetailsList />}
      </div>
    </div>
  );
};

export default App;