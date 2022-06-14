import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { normalizedProducts } from "../../constants/normalized-fixtures";

const productSlice = createSlice({
  name: "product",
  initialState: {
    entities: normalizedProducts.reduce((acc, product) => {
      acc[product.id] = product;
      return acc;
    }, {}),
    ids: normalizedProducts.map(({ id }) => id),
  },
  reducers: {
    productReducer: (state = this.initialState, action) => {
      switch (action.type) {
        default:
          return state;
      }
    },
  },
});

export default productSlice;
