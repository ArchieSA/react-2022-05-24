import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    entities: {},
    ids: [],
    status: "notStarted",
  },

  reducers: {
    failLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = "failed";
    },

    startLoading: (state) => {
      state.status = "loading";
    },

    successLoading: (state, { payload }) => {
      state.entities = (payload || []).reduce((acc, review) => {
        acc[review.id] = review;
        return acc;
      }, state.entities);

      state.ids = [...state.ids, ...(payload || []).map(({ id }) => id)];

      state.status = "success";
    },
  },
});

export default reviewSlice;
