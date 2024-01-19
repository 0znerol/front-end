export default function jobsReducer(state = [], action) {
  //   console.log(action);

  switch (action.type) {
    case "GET_ALL_JOBS": {
      //   console.log(action.payload);
      return [state, action.payload];
      break;
    }
    // case "CLEAR_JOBS":
    //   return [state, action.payload];
    default:
      return state;
  }
}
