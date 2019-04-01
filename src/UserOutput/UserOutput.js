import React from "react";

const userOutput = props => {
  return (
    <div style={props.style} onClick={props.click}>
      <p>User: {props.username}</p>
      <p>Click to change name</p>
    </div>
  );
};

export default userOutput;
