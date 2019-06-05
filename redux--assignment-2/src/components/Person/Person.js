import React from "react";

import "./Person.css";

const person = props => (
  <div className="Person" onClick={props.clicked}>
    <h1>{props.name}</h1>
    <p>Id: {props.id}</p>
    <p>Age: {props.age}</p>
  </div>
);

export default person;
