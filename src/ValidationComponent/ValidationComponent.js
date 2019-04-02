import React from "react";

const validationComponent = props => {
  let text = props.length < 5 ? "Text too short" : "Text long enough";
  return <p>{text}</p>;
};

export default validationComponent;
