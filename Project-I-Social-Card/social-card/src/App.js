import React from "react";

import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import Footer from "./components/FooterComponents/Footer";

import "normalize.css";
import "./App.css";

const App = () => {
  return (
    <article className="post">
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </article>
  );
};

export default App;
