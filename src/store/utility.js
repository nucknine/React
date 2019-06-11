export function updateObject(state, updatedValues) {
  return {
    ...state,
    ...updatedValues
  };
}
