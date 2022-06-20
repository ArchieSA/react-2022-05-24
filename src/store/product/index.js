import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    entities: {},
    ids: [],
    status: 'notStarted',
  },
  reducers: {
    startLoading: state => {
      state.status = 'loading';
    },
    failLoading: state => {
      state.status = 'failed';
    },
    successLoading: (state, { payload }) => {
      state.entities = {
        ...state.entities,
        ...(payload || []).reduce((acc, product) => {
          acc[product.id] = product;
          return acc;
        }, {}),
      };

      state.ids = [...state.ids, ...(payload || []).map(({ id }) => id)];

      state.status = 'success';
    },
    reset: state => {
      state.entities = {};
      state.ids = [];
    },
  },
});

export default productSlice;
