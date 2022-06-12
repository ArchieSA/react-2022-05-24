
export const selectReviewState = (state) => state.review;
export const selectReviewIds = (state) => selectReviewState(state).ids;
export const selectReviewTextById = (state, id) => selectReviewState(state).entities[id]?.text;
export const selectReviewRatingById = (state, id) => selectReviewState(state).entities[id]?.rating;
export const selectReviewUserIdById = (state, id) => selectReviewState(state).entities[id]?.userId;
