import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    entities: {},
    ids: [],
    status: "notStarted",
  },
  reducers: {
    startLoading: (state) => {
      state.status = "loading";
    },
    failLoading: (state) => {
      state.status = "failed";
    },
    successLoading: (state, { payload }) => {
      state.entities = (payload || []).reduce(
        (acc, review) => {
          acc[review.id] = review;
          return acc;
        },
        { ...state.entities }
      );

      state.ids = [...state.ids, ...(payload || []).map(({ id }) => id)];

      state.status = "success";
    },
  },
});

export default reviewSlice;
