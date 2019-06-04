const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1
    };
  }
  if (action.type === "ADD_SOME") {
    return {
      counter: state.counter + action.value
    };
  }
  if (action.type === "SUB_SOME") {
    return {
      counter: state.counter - action.value
    };
  }
  if (action.type === "SUBTRACT") {
    return {
      counter: state.counter - 1
    };
  }
  return state;
};

export default reducer;
