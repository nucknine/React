import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return <div className="App" />;
  }
}

export default App;

/*
Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
Create a new component (=> ValidationComponent) which receives the text length as a prop
Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
When you click a CharComponent, it should be removed from the entered text.
*/
