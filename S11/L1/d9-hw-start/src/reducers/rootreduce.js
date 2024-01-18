import { combineReducers } from "redux";
import jobsReducer from "./allJobsreduce";
import favJobsReducer from "./addFavReduce";

export default combineReducers({
  jobs: jobsReducer,
  favJobs: favJobsReducer,
});
