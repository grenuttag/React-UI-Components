import React from "react";

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay />

      <div className="container">
        <div className="entry">
          <ActionButton text="Clear" />
          <NumberButton text="1" />
          <NumberButton text="2" />
          <NumberButton text="3" />
          <NumberButton text="4" />
          <NumberButton text="5" />
          <NumberButton text="6" />
          <NumberButton text="7" />
          <NumberButton text="8" />
          <NumberButton text="9" />
          <ActionButton text="0" />
        </div>
        <div className="operations">
          <NumberButton buttonStyle="operation" text="&divide;" />
          <NumberButton buttonStyle="operation" text="&times;" />
          <NumberButton buttonStyle="operation" text="&minus;" />
          <NumberButton buttonStyle="operation" text="&#43;" />
          <NumberButton buttonStyle="operation" text="&#61;" />
        </div>
      </div>
    </div>
  );
};

export default App;
