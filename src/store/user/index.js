import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    entities: {},
    ids: [],
    status: 'notStarted',
  },
  reducers: {
    startLoading: state => {
      state.entities = {};
      state.ids = [];
      state.status = 'loading';
    },
    failLoading: state => {
      state.entities = {};
      state.ids = [];
      state.status = 'failed';
    },
    successLoading: (state, { payload }) => {
      state.entities = (payload || []).reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});

      state.ids = (payload || []).map(({ id }) => id);

      state.status = 'success';
    },
  },
});

export default userSlice;
