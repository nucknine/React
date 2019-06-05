import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onPersonAdd} />
        {this.props.reduxPersons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            id={person.id}
            clicked={() => this.props.onPersonDelete(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reduxPersons: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPersonAdd: () => dispatch({ type: actionTypes.ADD_PERSON }),
    onPersonDelete: id =>
      dispatch({ type: actionTypes.DELETE_PERSON, personId: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
