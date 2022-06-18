export const selectReviewState = (state) => state.review;

export const selectReviewById = (state, id) =>
  selectReviewState(state).entities[id];

export const selectReviewByIds = (state, ids) => {
  const reviews = selectReviewState(state).entities;

  return ids.map((id) => reviews[id]).filter(r => r != undefined);
};

export const selectReviewIsLoading = (state) =>
  selectReviewState(state).status == "loading";

export const selectReviewIsFailed = (state) =>
  selectReviewState(state).status == "failed";

export const selectReviewsExistForRestaurant = (state, restaurantId) => {
  const restaurant = state.restaurant.entities[restaurantId];

  if (restaurant != undefined) {
    const reviewIds = restaurant.reviews;
    return state.review.ids.includes(reviewIds[0]);
  }

  return false;
}
