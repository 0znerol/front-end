export default function jobsReducer(state = false, action) {
  //   console.log(action);

  switch (action.type) {
    case "LOADING": {
      //   console.log(action.payload);
      console.log(action.payload);
      return [(state, action.payload)];
      break;
    }
    // case "CLEAR_JOBS":
    //   return [state, action.payload];
    default:
      return state;
  }
}
