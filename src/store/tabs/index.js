import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../constants/normalized-fixtures";

const initialState = {
      ids: normalizedRestaurants.map(({ id }) => id),
      currentTabId: normalizedRestaurants[0].id,
};

const tabsSlice = createSlice({
    name: "tabs",
    initialState: initialState,
    reducers: {
        select: (state, {payload}) => {
            state.currentTabId = payload;
            return state;
        },
    },
});

export default tabsSlice;