import axios from "axios";
import jobsReducer from "../reducers/allJobsreduce";
import favJobsReducer from "../reducers/addFavReduce";
export const deleteFav = (job) => {
  return { type: "REMOVE_JOB", payload: job };
};

export const addFavorites = (job) => {
  //return { type: 'ADD_job' , payload: job }
  // Con Redux Thunk ho la possibilità di effettuare controlli prima di emettere una a azione
  return (dispatch, getState) => {
    // function(dispatch, state) {} => (dispatch, state) => {}
    // getState ritorna lo stato contenuto nell store
    console.log(getState());
    // findIndex cerca un oggetto in un array, se lo trova mi restituisce l'indice altrimenti -1
    // find cerca un oggetto in un array, se lo trova mi restituisce l'oggetto' altrimenti null
    // if (getState().jobs.findIndex((u) => u._id === job._id) < 0) {
    dispatch({ type: "ADD_FAV", payload: job });
    // } else {
    //   console.log("Email già usata!!!");
    // }
  };
};

export const getAllJobs = (query) => {
  // Con Redux Thunk ho la possibilità di effettuare chiamate
  // asincrone prima di inviare una azione
  return function (dispatch, getState) {
    // function(dispatch, state)
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
