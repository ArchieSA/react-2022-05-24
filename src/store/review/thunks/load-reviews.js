import { selectRestaurantReviewIds } from '../../restaurant/selectors';
import reviewSlice from '../index';
import { selectReviewIds } from '../selectors';

export function loadReviewsIfNotExist(restaurantId) {
  return function (dispatch, getState) {
    const reviewIds = selectReviewIds(getState());
    const restaurantReviews = selectRestaurantReviewIds(
      getState(),
      restaurantId
    );

    if (
      reviewIds?.length &&
      restaurantReviews?.length &&
      restaurantReviews.every(reviewId => reviewIds.includes(reviewId))
    ) {
      console.log('already loaded');

      return;
    }

    dispatch(reviewSlice.actions.startLoading());

    fetch(`http://localhost:3001/api/reviews?id=${restaurantId}`)
      .then(response => response.json())
      .then(reviews => {
        dispatch(reviewSlice.actions.successLoading(reviews));
      })
      .catch(() => {
        dispatch(reviewSlice.actions.failLoading());
      });
  };
}
