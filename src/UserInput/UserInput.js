import React from "react";
// eslint-disable-next-line
import userInputStyle from "./UserInput.css";

const userInput = props => {
  return (
    <input
      className="userInput"
      placeholder="Type to change username"
      onChange={props.change}
      value={props.username}
    />
  );
};

export default userInput;
