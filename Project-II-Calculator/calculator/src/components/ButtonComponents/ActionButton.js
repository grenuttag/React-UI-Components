import React from "react";
import "./Button.css";

const ActionButton = props => {
  return <div className={`button ${props.buttonStyle}`}>{props.text}</div>;
};

ActionButton.defaultProps = {
  buttonStyle: "fullwidth"
};

export default ActionButton;
