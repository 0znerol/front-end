// storeReducer(initialState, action)
export default function storeReducer(state = [], action) {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "REMOVE_FAV":
      return state.filter((u) => u._id !== action.payload._id);
    case "ADD_FAV":
      return [...state, action.payload];

    default:
      break;
  }

  return state;
}
