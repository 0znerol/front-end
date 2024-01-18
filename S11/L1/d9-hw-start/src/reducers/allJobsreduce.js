export default function jobsReducer(state = [], action) {
  console.log(action);
  switch (action.type) {
    case "GET_ALL_JOBS": {
      console.log(action.payload);
      return [state.favjobs, action.payload];
    }
    case "CLEAR_JOBS":
      return [state, action.payload];
    default:
      return state;
  }
}
