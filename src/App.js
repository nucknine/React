import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "John"
  };

  typeData = event => {
    this.setState({
      username: event.target.value
    });
  };
  changeName = () => {
    this.setState({
      username: "John Carter"
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      width: "300px",
      margin: "5px auto",
      "box-sizing": "border-box",
      overflow: "hidden",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <p>Type to change username</p>
        <UserInput
          username={this.state.username}
          change={this.typeData.bind(this)}
        />
        <UserOutput
          style={style}
          click={this.changeName.bind(this)}
          username={this.state.username}
        />
        <UserOutput
          style={style}
          click={this.changeName.bind(this)}
          username={this.state.username}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
/*
+Create TWO new components: UserInput and UserOutput
+UserInput should hold an input element, UserOutput two paragraphs
+Output multiple UserOutput components in the App component (any paragraph texts of your choice)
+Pass a username (of your choice) to UserOutput via props and display it there
+Add state to the App component (=> the username) and pass the username to the UserOutput component
+Add a method to manipulate the state (=> an event-handler method)
+Pass the event-handler method reference to the UserInput component and bind it to the input-change event
+Ensure that the new input entered by the user overwrites the old username passed to UserOutput
+Add two-way-binding to your input (in UserInput) to also display the starting username
+Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets
*/
