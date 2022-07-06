export const selectReviewState = (state) => state.review;
export const selectReviewIds = (state) => selectReviewState(state).ids;

export const selectReviewById = (state, id) =>
  selectReviewState(state).entities[id];

export const selectReviewByIds = (state, ids) => {
  const reviewById = selectReviewState(state).entities;

  return ids.map((id) => reviewById[id]);
};

export const selectIsReviewsLoading = (state) =>
  selectReviewState(state).status === "loading";
export const selectIsReviewsFailed = (state) =>
  selectReviewState(state).status === "failed";
