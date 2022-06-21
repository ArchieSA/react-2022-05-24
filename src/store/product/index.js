import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    entities: {},
    ids: [],
    status: "notStarted",
  },
  reducers: {
    startLoading: (state) => {
      state.status = "loading";
    },
    failLoading: (state) => {
      state.status = "failed";
    },
    successLoading: (state, { payload }) => {
      
      state.entities = (payload || []).reduce(
        (acc, product) => {
          acc[product.id] = product;
          return acc;
        },
        { ...state.entities }
      );
     ;
      state.ids =  [...new Set([...state.ids, ...(payload || []).map((item) => item.id )])];
      console.log('state ids: ', state.ids);
      state.status = "success";
    },
  },
});

export default productSlice;

