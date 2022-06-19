import { selectRestaurantById } from "../restaurant/selectors";

export const selectReviewState = (state) => state.review;
export const selectReviewById = (state, id) => selectReviewState(state).entities[id];

export const selectReviewByIds = (state, ids) => {
  const reviewById = selectReviewState(state).entities;

  return ids.map((id) => reviewById[id]);
};

export const selectIsAllRestaurantReviewsLoaded = (state, restaurantId) => {
  const restaurantReviewsIds = selectRestaurantById(state, restaurantId).reviews;
  const loadedReviews = selectReviewState(state).ids;
  return restaurantReviewsIds.every((id) => loadedReviews.includes(id));
};

export const selectIsReviewsLoading = (state) => selectReviewState(state).status === "loading";
export const selectIsReviewsLoadingFailed = (state) => selectReviewState(state).status === "failed";