export const selectRewiewsState = (state) => state.reviews;

export const selectRewiewsIds = (state) => selectRewiewsState(state).ids;

export const selectRewiewsById = (state, id) =>
  selectRewiewsState(state).entities[id];

export const selectRewiewsUserIdById = (state, id) =>
  selectRewiewsState(state).entities[id]?.userId;

export const selectRewiewsTextById = (state, id) =>
  selectRewiewsState(state).entities[id]?.text;

export const selectRewiewsRatingById = (state, id) =>
  selectRewiewsState(state).entities[id]?.rating;
