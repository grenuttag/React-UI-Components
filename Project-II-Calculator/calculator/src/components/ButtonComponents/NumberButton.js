import React from "react";
import "./Button.css";

const NumberButton = props => {
  return <div className={`button ${props.buttonStyle}`}>{props.text}</div>;
};

NumberButton.defaultProps = {
  buttonStyle: "number"
};

export default NumberButton;
