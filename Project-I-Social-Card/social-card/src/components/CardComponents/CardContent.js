import React from "react";
import "./Card.css";

const CardContent = () => {
  return (
    <div className="link-meta">
      <div className="link-title">Get started with React</div>
      <div className="link-description">
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </div>
      <a className="link-hyperlink" href="https://reactjs.org">
        reactjs.org
      </a>
    </div>
  );
};

export default CardContent;
