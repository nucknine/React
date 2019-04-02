import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";
import charComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    textLength: 0,
    charComponents: [],
    inputValue: ""
  };

  checkInputData = event => {
    const charComponents = [...this.state.charComponents];
    charComponents.push({
      index: Math.floor(Math.random() * 1000),
      char: event.target.value[event.target.value.length - 1]
    });

    this.setState({
      charComponents,
      textLength: event.target.value.length,
      inputValue: event.target.value
    });
  };

  deleteChar = id => {
    const charComponents = [...this.state.charComponents];
    let index = charComponents.findIndex(char => char.index === id);
    charComponents.splice(index, 1);

    let newValue = charComponents.map(charComp => charComp.char).join("");
    this.setState({
      charComponents,
      inputValue: newValue
    });
  };

  render() {
    let charComponents = [];
    charComponents = this.state.charComponents.map(charComponent => {
      return (
        <CharComponent
          click={this.deleteChar.bind(this)}
          char={charComponent.char}
          index={charComponent.index}
          key={charComponent.index}
        />
      );
    });

    return (
      <div className="App">
        <input value={this.state.inputValue} onChange={this.checkInputData} />
        <p>{this.state.textLength}</p>
        <ValidationComponent length={this.state.textLength} />
        {charComponents}
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
