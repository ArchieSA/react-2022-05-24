import reviewSlice from "../index";
import { selectReviewIds } from "../selectors";
import { selectRestaurantReviewIds } from "../../restaurant/selectors";

export function loadReviewsIfNotExist(restaurantId) {
  return function (dispatch, getState) {
    const restauranReviewIds = selectRestaurantReviewIds(
      getState(),
      restaurantId
    );
    const loadedReviewIds = selectReviewIds(getState());
    const notExistReviews = restauranReviewIds.filter(
      (id) => !loadedReviewIds.includes(id)
    );

    if (notExistReviews.length === 0) return;

    dispatch(reviewSlice.actions.startLoading());

    fetch(`http://localhost:3001/api/reviews?id=${restaurantId}`)
      .then((response) => response.json())
      .then((reviews) => {
        dispatch(reviewSlice.actions.successLoading(reviews));
      })
      .catch(() => {
        dispatch(reviewSlice.actions.failLoading());
      });
  };
}
