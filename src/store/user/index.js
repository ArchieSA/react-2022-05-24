import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../constants/normalized-fixtures";

const initialState = {
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {}),
  ids: [normalizedUsers.map(({ id }) => id)],
};


const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {

    }
});

export default userSlice;