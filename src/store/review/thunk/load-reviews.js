import { selectReviewIds } from "../selectors";
import reviewSlice from "../index";
import { selectRestaurantReviewsById } from "../../restaurant/selectors";

export function loadReviewsIfNotExist(restaurantId) {
  return function (dispatch, getState) {
    const reviewIds = selectReviewIds(getState());
    const restaurantReviews = selectRestaurantReviewsById(getState(), {
      restaurantId,
    });

    if (restaurantReviews.every((reviewId) => reviewIds.includes(reviewId))) {
      return;
    }

    dispatch(reviewSlice.actions.startLoading(null));

    fetch(
      `http://localhost:3001/api/reviews?${new URLSearchParams({
        id: restaurantId,
      }).toString()}`
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
