import * as actionTypes from "./actions";

const initialState = {
  ingredients: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INGREDIENTS_UPDATE: {
      return {
        ...state,
        ingredients: action.ingredients
      };
    }
  }
  return state;
};

export default reducer;
