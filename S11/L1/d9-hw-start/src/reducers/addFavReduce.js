export default function favJobsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_FAV":
      return [...state, action.payload];
    case "REMOVE_FAV": {
      return state.filter((u) => u._id !== action.payload._id);
    }
    default:
      return state;
  }
}
