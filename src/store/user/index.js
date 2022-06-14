import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../constants/normalized-fixtures";

const userSlice = createSlice({
  name: "user",
  initialState: {
    entities: normalizedUsers.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {}),
    ids: [normalizedUsers.map(({ id }) => id)],
  },
  reducers: {
    userReducer: (state = this.initialState, action) => {
      switch (action?.type) {
        default:
          return state;
      }
    },
  },
});

export default userSlice;
