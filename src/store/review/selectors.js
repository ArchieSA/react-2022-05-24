export const selectReviewState = state => state.review;

export const selectReviewIds = state => selectReviewState(state).ids;

export const selectIsLoading = state =>
  selectReviewState(state).status === 'loading';

export const selectIsFailed = state =>
  selectReviewState(state).status === 'failed';

export const selectReviewById = (state, id) =>
  selectReviewState(state).entities[id];

export const selectReviewByIds = (state, ids) => {
  const reviewById = selectReviewState(state).entities;

  return ids.map(id => reviewById[id]).filter(Boolean);
};
