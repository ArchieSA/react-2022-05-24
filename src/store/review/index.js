import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    entities: {},
    ids: [],
    status: "notStarted",
  },
  reducers:{
      loading: (state) => {
        state.status = "loading";
    },
    loadingFailed: (state) => {
      state.status = "failed";
    },
    successfullyLoaded: (state, { payload }) => {
      state.entities = (payload || []).reduce((acc, review) => {
        acc[review.id] = review;
        return acc;
      }, state.entities);
      state.ids = (payload || []).map(({ id }) => id);
      state.status = "success";
    },
  }

});

export default reviewSlice;
