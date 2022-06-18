import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
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

      const newEntities = (payload.productsData || []).reduce((acc, product) => {
        acc[product.id] = product;
        return acc;
      }, {});

      const newIds = (payload.productsData || []).map(({ id }) => id);

      state.entities = { ...payload.productsState.entities, ...newEntities };
      state.ids = [...payload.productsState.ids, ...newIds];
      state.status = "success";
    },
  }
});

export default productSlice;
