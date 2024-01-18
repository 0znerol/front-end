export default function favJobsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_FAV":
      return [...state, action.payload];
    default:
      return state;
  }
}
