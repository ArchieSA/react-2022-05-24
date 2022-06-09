export const selectReviewState = (state) => state.review;

export const selectReviewIds = (state) => selectReviewState(state).ids;
export const selectReviewById = (state, id) => 
    selectReviewState(state).entities[id];

export const selectReviewNameById = (state, id) => 
    selectReviewState(state).entities[id]?.name