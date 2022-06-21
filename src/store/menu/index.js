import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
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
        state.entities = (payload || []).reduce((acc, product) => {
          acc[product.id] = product;
          return acc;
        }, state.entities);
        state.ids = state.ids.concat((payload || []).map(({ id }) => id));
        state.status = "success";
      },
    }
});

export default productSlice;