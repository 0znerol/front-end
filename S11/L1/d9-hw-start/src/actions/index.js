import axios from "axios";
export const deleteFav = (fav) => {
  // console.log(fav._id);
  return (dispatch, state) => {
    // console.log(state);
    dispatch({ type: "REMOVE_FAV", payload: fav });
  };
};

export const addFavorites = (job) => {
  return (dispatch, getState) => {
    dispatch({ type: "ADD_FAV", payload: job });
  };
};

export const getAllJobs = (query) => {
  return function (dispatch, getState) {
    axios
      .get(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
          query +
          "&limit=20"
      )
      .then((response) => {
        return dispatch({ type: "GET_ALL_JOBS", payload: response.data });
      });
  };
};
