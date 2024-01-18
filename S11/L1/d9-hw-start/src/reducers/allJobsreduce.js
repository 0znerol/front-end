export default function jobsReducer(state = [], action) {
  switch (action.type) {
    case "GET_ALL_JOBS":
      return [...state, action.payload];
    default:
      return state;
  }
}
