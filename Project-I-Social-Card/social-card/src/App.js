import React from "react";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";

import "normalize.css";
import "./App.css";

const App = () => {
  return (
    <article className="post">
      <HeaderContainer />
      <CardContainer />
    </article>
  );
};

export default App;
