import React from "react";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

import "./Card.css";

class CardContainer extends React.Component {
  render() {
    return (
      <aside className="card">
        <CardBanner />
        <CardContent />
      </aside>
    );
  }
}

export default CardContainer;
