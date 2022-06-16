import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    entities: {},
    ids: [],
    status: 'notStarted',
  },
  reducers: {
    startLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = 'loading';
    },
    failLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = 'failed';
    },
    successLoading: (state, {payload}) => {

      state.entities = (payload || []).reduce((acc, product) => {
        acc[product.id] = product;
        return acc;
      },  state.entities);

      state.ids = (payload || []).map(({ id }) => id);

      state.status = "success";
    }
  }
});

export default productSlice;
