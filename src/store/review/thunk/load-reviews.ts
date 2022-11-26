import { selectReviewIds } from "../selectors";
import reviewSlice, { Review, ReviewState } from "../index";
import { selectRestaurantReviewsById } from "../../restaurant/selectors";
import { AppDispatch, RootState } from "../../store";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../hooks/hook_ts";

// ThunkAction<void, RootState, unknown, PayloadAction<Review[] | null | {}>>
export function loadReviewsIfNotExist(restaurantId: string | undefined) {
  return function (dispatch: Dispatch, getState: () => RootState) {
    const reviewIds = selectReviewIds(getState());
    const restaurantReviews = selectRestaurantReviewsById(getState(), {
      restaurantId,
    });

    if (restaurantReviews.every((reviewId) => reviewIds.includes(reviewId))) {
      return;
    }

    dispatch(reviewSlice.actions.startLoading(null));

    fetch(
      `http://localhost:3001/api/reviews?${new URLSearchParams(
        restaurantId
      ).toString()}`
    )
      .then((response) => response.json())
      .then((reviews) => {
        dispatch(reviewSlice.actions.successLoading(reviews));
      })
      .catch((error) => {
        dispatch(reviewSlice.actions.failLoading(error));
      });
  };
}
