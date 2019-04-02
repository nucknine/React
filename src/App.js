import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    userInput: "",
    show: true
  };
  toggleCharList = () => {
    this.setState({ show: !this.state.show });
  };
  inputChangedHandler = event => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = index => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };

  render() {
    let charList = [];
    if (this.state.show) {
      charList = this.state.userInput.split("").map((ch, index) => {
        return (
          <Char
            character={ch}
            key={index}
            clicked={this.deleteCharHandler.bind(this, index)}
          />
        );
      });
    }
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        <div>
          <button onClick={this.toggleCharList.bind(this)}>
            Show/Hide charList
          </button>
        </div>
        {charList}
      </div>
    );
  }
}

export default App;

/*
+Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
+Create a new component (=> ValidationComponent) which receives the text length as a prop
+Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
+Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
+Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
+When you click a CharComponent, it should be removed from the entered text.
*/
