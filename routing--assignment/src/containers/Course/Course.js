import React, { Component } from "react";

class Course extends Component {
  state = {
    title: null
  };

  componentDidMount() {
    this.updateQueryParams();
  }

  componentDidUpdate() {
    this.updateQueryParams();
  }

  updateQueryParams() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      if (param[0] === "title") {
        if (param[1] !== this.state.title) {
          this.setState({ title: param[1] });
        }
      }
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;
