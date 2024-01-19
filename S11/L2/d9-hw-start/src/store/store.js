import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import jobsReducer from "../reducers/allJobsreduce";
import favJobsReducer from "../reducers/addFavReduce";
import loadingReducer from "../reducers/loadingReduce";
import errorReducer from "../reducers/errorReduce";
const state = {
  favjobs: [],
  jobs: [],
  loading: false,
  error: false,
};

const bigReducers = combineReducers({
  jobs: jobsReducer,
  favjobs: favJobsReducer,
  loading: loadingReducer,
  error: errorReducer,
});

// createStore(storeReducer, initialState?, middleware?)
export const store = createStore(bigReducers, state, applyMiddleware(thunk));
