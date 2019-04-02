import React from "react";
const style = {
  display: "inline-block",
  padding: "16px",
  textAlign: "center",
  margin: "16px",
  border: "1px solid black"
};

const charComponent = props => {
  return (
    <div onClick={props.click.bind(this, props.index)} style={style}>
      {props.char}
    </div>
  );
};

export default charComponent;
