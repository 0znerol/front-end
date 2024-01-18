import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import jobsReducer from "../reducers/allJobsreduce";
import favJobsReducer from "../reducers/addFavReduce";

const state = {
  favjobs: [],
  jobs: [],
};

const bigReducers = combineReducers({
  jobs: jobsReducer,
  favjobs: favJobsReducer,
});

// createStore(storeReducer, initialState?, middleware?)
export const store = createStore(bigReducers, state, applyMiddleware(thunk));
