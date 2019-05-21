import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Course from "../Course/Course";

import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" }
    ]
  };

  render() {
    const links = this.state.courses.map(course => {
      return (
        <NavLink
          key={course.id}
          to={{
            pathname: "/courses/course/" + course.id,
            search: "?id=3&title=" + course.title
          }}
        >
          <article className="Course">{course.title}</article>
        </NavLink>
      );
    });
    return (
      <React.Fragment>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">{links}</section>
        <hr />
        <Route
          path={this.props.match.url + "/course/:id"}
          exact
          component={Course}
        />
      </React.Fragment>
    );
  }
}

export default Courses;
