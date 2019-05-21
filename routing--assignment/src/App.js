import React, { Component } from "react";

import Courses from "./containers/Courses/Courses";
import Course from "./containers/Course/Course";
import Users from "./containers/Users/Users";

import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/users">Users</NavLink>
          </nav>
          <Switch>
            <Route path="/courses" component={Courses} />
            <Route path="/users" exact component={Users} />
            <Redirect from="/all-courses" to="/courses" />
            <Route render={() => <h1>Not found 404</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
