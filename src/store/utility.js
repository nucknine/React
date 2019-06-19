export function updateObject(oldObject, updatedValues) {
  return {
    ...oldObject,
    ...updatedValues
  };
}
