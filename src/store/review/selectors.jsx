export const selectReviewState = (state) => state.review;

export const selectReviewById = (state, id) => selectReviewState(state).entities[id];
export const selectReviewIds = (state) => selectReviewState(state).Ids;