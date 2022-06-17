import { selectReviewByIds } from "../review/selectors";
import { createSelector } from "reselect";

export const selectRestaurantState = (state) => state.restaurant;

export const selectRestaurantIds = (state) => selectRestaurantState(state).ids;
export const selectIsLoading = (state) =>
  selectRestaurantState(state).status === "loading";
export const selectIsFailed = (state) =>
  selectRestaurantState(state).status === "failed";
export const selectRestaurantById = (state, id) =>
  selectRestaurantState(state).entities[id];
export const selectRestaurants = (state) =>
  Object.values(selectRestaurantState(state).entities);

export const selectRestaurantReviewIds = (state, restaurantId) => {
  return selectRestaurantById(state, restaurantId).reviews;
};

export const selectRestaurantMenuIds = (state, restaurantId) => {
  //console.log(selectRestaurantById(state, restaurantId).menu);
  return selectRestaurantById(state, restaurantId).menu;
};

export const selectRestaurantRating = createSelector(
  [
    (state) => state,
    (_, restaurantId) => restaurantId,
    selectRestaurantReviewIds,
  ],
  (state, restaurantId, reviewIds) => {
    const selectedReviews = selectReviewByIds(state, reviewIds);

    return selectedReviews[0]
      ? Math.ceil(
          selectedReviews?.reduce((prev, curr) => prev + curr.rating, 0) /
            selectedReviews.length
        )
      : 0;
  }
);

// const selectorTest = () => {
//   const result1 = selectResult1();
//   const result2 = selectResult2();
//
//   return result1 * result2;
// };
//
// const selectorTest = createSelector(
//   [selectResult1, selectResult2],
//   (result1, result2) => [result1 * result2]
// );
