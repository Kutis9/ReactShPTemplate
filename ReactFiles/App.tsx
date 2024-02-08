import React, { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import LoggedUser from "./components/LoggedUser";
import CharactersList from "./components/CharactersList";
import CharactersDetailsList from "./components/DetailsList";
import { DefaultButton, PrimaryButton } from "@fluentui/react";

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
<div>
  {/* <CharactersList /> */}
  <PrimaryButton onClick={toggleView} text={isCardView ? "Zobraz zoznam" : "Zobraz Karty"} />
  {isCardView ? <CharactersList /> : <CharactersDetailsList />}
</div>
  </div>
  );
};

export default App;