import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {},
  reducers: {
    add: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;

      return state;
    },
    remove: (state, { payload }) => {
      state[payload] = state[payload] ? state[payload] - 1 : 0;

      return state;
    },
  },
});

export default basketSlice;
