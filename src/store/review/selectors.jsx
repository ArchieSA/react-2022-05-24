export const selectReviewState = (state) => state.review;

export const selectReviewById = (state, id) => selectReviewState(state).entities[id];
export const selectReviewTextById = (state, id) => selectReviewState(state).entities[id]?.text;
export const selectReviewRatingById = (state, id) => selectReviewState(state).entities[id]?.rating;

export const selectReviewIds = (state) => selectReviewState(state).Ids;