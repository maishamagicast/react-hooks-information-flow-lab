import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  function Header({ onClick }) {
    return (
      <header>
        <h2>Shopster</h2>
        <button onClick={onClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
        
      </header>
    );
  }
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onClick={onDarkModeClick}/>
      <ShoppingList items={itemData} />
      
    </div>
  );
}

export default App;
