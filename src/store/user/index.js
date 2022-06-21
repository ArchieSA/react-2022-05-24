import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    entities: {},
    ids: [],
    initialState: "notStarted",
  },
  reducers: {
    loading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = "loading";
  },
  loadingFailed: (state) => {
    state.entities = {};
    state.ids = [];
    state.status = "failed";
  },
  successfullyLoaded: (state, { payload }) => {
    state.entities = (payload || []).reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});
    state.ids = (payload || []).map(({ id }) => id);
    state.status = "success";
  },
}
});

export default userSlice;