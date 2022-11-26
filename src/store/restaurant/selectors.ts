import { selectReviewByIds } from "../review/selectors";
import { createSelector } from "reselect";
import { Review } from "../review";
import { RootState } from "../store";
import { RestaurantInterface } from "./index";
import { Product } from "../product";
import { PayloadAction } from "@reduxjs/toolkit";

export const selectRestaurantState = (state: RootState) => state.restaurant;

export const selectRestaurantIds = (state: RootState) =>
  selectRestaurantState(state).ids;
export const selectIsLoading = (state: RootState) =>
  selectRestaurantState(state).status === "loading";
export const selectIsFailed = (state: RootState) =>
  selectRestaurantState(state).status === "failed";
export const selectRestaurantById = (
  state: RootState,
  restaurantId: string | undefined
) => selectRestaurantState(state).entities[restaurantId || ""];
export const selectRestaurants = (state: RootState) =>
  Object.values(selectRestaurantState(state).entities);

const selectRestaurantReviewIds = (state: RootState, restaurantId: string) => {
  // console.log(restaurantId);
  return selectRestaurantById(state, restaurantId).reviews;
};

export const selectRestaurantRating = createSelector(
  [
    (state: RootState) => state,
    (_, restaurantId: string) => restaurantId,
    selectRestaurantReviewIds,
  ],
  (state, restaurantId, reviewIds) => {
    const reviews = selectReviewByIds(state, reviewIds);

    if (!reviews?.filter(Boolean).length) {
      return 0;
    }

    return Math.ceil(
      reviews.reduce((prev: number, curr: Review) => prev + curr.rating, 0) /
        reviews.length
    );
  }
);

export const selectRestaurantReviewsById = (
  state: RootState,
  payload: { restaurantId: string | undefined }
) => selectRestaurantState(state)?.entities[payload.restaurantId || ""]?.reviews || [];

export const selectRestaurantProductsById = (
  state: RootState,
  payload: { restaurantId: string | undefined }
) =>
  selectRestaurantState(state)?.entities[payload.restaurantId || ""]?.menu ||
  [];

export const selectAllRestaurantProducts = (state: RootState) => {
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
export const selectRestaurantIdsFilteredByName = (state: RootState) =>
  selectRestaurantState(state).ids;
export const selectRestaurantNameById = (
  state: RootState,
  restaurantId: string | undefined
) => selectRestaurantById(state, restaurantId).name;

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
