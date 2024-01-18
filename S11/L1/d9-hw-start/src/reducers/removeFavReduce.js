// case "REMOVE_FAV":
//     return state.filter((u) => u._id !== action.payload._id);
export default function removeFavReducer(state = [], action) {
  switch (action.type) {
    case "REMOVE_FAV":
      return state.favjobs.filter((u) => u._id !== action.payload._id);
    default:
      return state;
  }
}
