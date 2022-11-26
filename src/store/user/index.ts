import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Review, ReviewState} from "../review";

export type UserState = {
  entities: Record<string, User>;
  ids: string[];
  status: string;
};

export interface User {
  id: string;
  name: string;
}

const initialState: UserState = {
  entities: {},
  ids: [],
  status: "notStarted",
};
type Acc = Record<string, User>;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoading: (state: UserState, action: PayloadAction<null>) => {
      state.status = "loading";
    },
    failLoading: (state: UserState) => {
      state.status = "failed";
    },
    successLoading: (state: UserState, action: PayloadAction<User[]>) => {
      state.entities = (action.payload || []).reduce(
        (acc: Acc, user) => {
          acc[user.id] = user;
          return acc;
        },
        { ...state.entities }
      );

      state.ids = [...state.ids, ...(action.payload || []).map(({ id }) => id)];

      state.status = "success";
    },
    addUser: (state: UserState, action: PayloadAction<User>) => {
      const s: Acc = {};
      const userNew = action.payload;
      s[userNew.id] = userNew;
      // console.log(s);
      state.entities = { ...state.entities, ...s};
      state.ids = [...state.ids, action.payload.id];
      state.status = "success";
      return state;
    },
  },
});

export default userSlice;
