import React from "react";

import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

import "./Card.css";

const CardContainer = () => {
  return (
    <aside className="card">
      <a href="https://reactjs.org">
        <CardBanner />
        <CardContent />
      </a>
    </aside>
  );
};

export default CardContainer;
