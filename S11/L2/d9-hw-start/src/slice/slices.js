import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
const initialState = {
  favjobs: [],
  jobs: [],
  loading: false,
  error: false,
};

// export const deleteFav = (fav) => {
//   // console.log(fav._id);
//   //   return (dispatch, state) => {
//   //     // console.log(state);
//   //     dispatch({ type: "REMOVE_FAV", payload: fav });
//   //   };
// };

// export const addFavorites = (job) => {
//   //   return (dispatch, getState) => {
//   //     dispatch({ type: "ADD_FAV", payload: job });
//   //   };
// };

export const getAllJobs = createAsyncThunk("users/fetch", async (query) => {
  const res = await axios.get(
    "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
      query +
      "&limit=20"
  );
  console.log(res);
  if (!res) {
    throw new Error(res.statusText);
  }

  return res.data;
});

// lo Slice è un elemento composto da nome, statoiniziale, reducers, azioni extrareducers
export const slices = createSlice({
  name: "AllJobs",
  initialState: initialState,

  reducers: (create) => ({
    addFavorites: create.reducer((state, action) => {
      console.log(action);
      state.favjobs.push(action.payload);
    }),
    deleteFav: create.reducer((state, action) => {
      console.log(action);
      state.favjobs = state.favjobs.filter(
        (ele) => ele._id !== action.payload._id
      );
    }),

    // getAllJobs: create.asyncThunk(
    //   async (query) => {
    //     console.log("users");
    //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //     return await res.json();
    //   },
    //   {
    //     fulfilled: (state, action) => {
    //       state.push(action.payload);
    //     },
    //   }
    // ),
  }),

  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = "Errore nel caricamento dei dati!!!";
      })
      .addCase(getAllJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload.data;
      });
  },
});

const { reducer, actions } = slices;
export const { addFavorites, deleteFav } = actions;
export default reducer;
