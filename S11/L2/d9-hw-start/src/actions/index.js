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
    dispatch({ type: "LOADING", payload: true });
    axios
      .get(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
          query +
          "&limit=20"
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          dispatch({ type: "LOADING", payload: false });
          dispatch({ type: "ERROR", payload: false });
          return dispatch({ type: "GET_ALL_JOBS", payload: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "LOADING", payload: false });
        return dispatch({ type: "ERROR", payload: true });
      });
  };
};
