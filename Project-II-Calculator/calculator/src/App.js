import React from "react";

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay />

      <div className="entry">
        <header className="clear">
          <ActionButton text="Clear" />
        </header>
        <section className="digits">
          <NumberButton text="1" />
          <NumberButton text="2" />
          <NumberButton text="3" />
          <NumberButton text="4" />
          <NumberButton text="5" />
          <NumberButton text="6" />
          <NumberButton text="7" />
          <NumberButton text="8" />
          <NumberButton text="9" />
        </section>
        <footer className="zero">
          <ActionButton text="0" />
        </footer>
      </div>
      <div className="operations">
        <NumberButton buttonStyle="operation" text="/" />
        <NumberButton buttonStyle="operation" text="*" />
        <NumberButton buttonStyle="operation" text="-" />
        <NumberButton buttonStyle="operation" text="+" />
        <NumberButton buttonStyle="operation" text="=" />
      </div>
    </div>
  );
};

export default App;
