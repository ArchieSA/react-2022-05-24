export const selectRestaurantState = (state) => state.restaurant;
export const selectRestaurantIds = (state) => selectRestaurantState(state).ids;
export const selectRestaurantById = (state, id) => selectRestaurantState(state).entities[id];
export const selectRestaurantReviewIdsById = (state, id) => selectRestaurantState(state).entities[id].reviews;
