export const selectReviewState = (state) => state.review;

export const selectReviewIds = (state) => selectReviewState(state).ids;
export const selectReviewById = (state, id) => 
    selectReviewState(state).entities[id];

export const selectReviewTextById = (state, id) => 
    selectReviewState(state).entities[id]?.text

export const selectReviewUserId = (state, id) => 
    selectReviewState(state).entities[id]?.userId

export const selectReviewRating = (state, id) => 
    selectReviewState(state).entities[id]?.rating