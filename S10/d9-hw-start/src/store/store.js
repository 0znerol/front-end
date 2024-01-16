import { createStore } from "redux";
import storeReducer from "../reducers";

const initialState = [];

// createStore(storeReducer, initialState?, middleware?)
export const store = createStore(storeReducer, initialState);
