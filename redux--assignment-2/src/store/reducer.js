import * as actionTypes from "../store/actions";

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name:
          Math.random()
            .toString(36)
            .substring(2, 4) +
          Math.random()
            .toString(36)
            .substring(2, 4),
        age: Math.floor(Math.random() * 40)
      };

      return {
        ...state,
        persons: state.persons.concat(newPerson)
      };

    case actionTypes.DELETE_PERSON:
      const newPersons = state.persons.filter(
        person => person.id !== action.personId
      );

      return {
        ...state,
        persons: newPersons
      };
  }

  return state;
};

export default reducer;
