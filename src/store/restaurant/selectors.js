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

const selectRestaurantReviewIds = (state, restaurantId) => {
  // console.log(restaurantId);
  return selectRestaurantById(state, restaurantId).reviews;
};

export const selectRestaurantRating = createSelector(
  [
    (state) => state,
    (_, restaurantId) => restaurantId,
    selectRestaurantReviewIds,
  ],
  (state, restaurantId, reviewIds) => {
    const reviews = selectReviewByIds(state, reviewIds);

    if (!reviews?.filter(Boolean).length) {
      return 0;
    }

    return Math.ceil(
      reviews.reduce((prev, curr) => prev + curr.rating, 0) / reviews.length
    );
  }
);

export const selectRestaurantReviewsById = (state, payload) =>
  selectRestaurantState(state)?.entities[payload.restaurantId]?.reviews || [];

export const selectRestaurantProductsById = (state, payload) =>
  selectRestaurantState(state)?.entities[payload.restaurantId]?.menu || [];

export const selectAllRestaurantProducts = (state) => {
  let arrays = Object.values(selectRestaurantState(state).entities).map(
    (id) => id.menu || []
  );
  let newArr = [];
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      newArr.push(arrays[i][j]);
    }
  }
  return newArr;
};
export const selectRestaurantIdsFilteredByName = (state) =>
  selectRestaurantState(state).ids;
export const selectRestaurantNameById = (state, restaurantId) =>
  selectRestaurantById(state, restaurantId).name;

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
