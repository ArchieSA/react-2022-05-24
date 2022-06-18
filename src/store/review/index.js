import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    entities: {},
    ids: [],
    status: "notStarted"
  },
  reducers: {
    startLoading: (state) => {
      state.status = "loading";
    },
    failLoading: (state) => {
      state.status = "failed";
    },
    successLoading: (state, { payload }) => {

      const newEntities = (payload.reviewsData || []).reduce((acc, review) => {
        acc[review.id] = review;
        return acc;
      }, {});

      const newIds = (payload.reviewsData || []).map(({ id }) => id);

      state.entities = { ...payload.reviewsState.entities, ...newEntities };
      state.ids = [...payload.reviewsState.ids, ...newIds];
      state.status = "success";
    },
  }
});

export default reviewSlice;
