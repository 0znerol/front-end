// storeReducer(initialState, action)
export default function storeReducer(state = [], action) {
  console.log(action);

  switch (action.type) {
    case "ADD_FAVO":
      return [...state, action.payload];

    default:
      break;
  }

  return state;
}
