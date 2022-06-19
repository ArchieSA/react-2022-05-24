import reviewSlice from ".."
import { selectIsAllRestaurantReviewsLoaded } from "../selectors";

export const loadReviewsIfNotExist = (restaurantId) => (dispatch, getState) => {

    if (selectIsAllRestaurantReviewsLoaded(getState(), restaurantId)){
        return;
    }

    dispatch(reviewSlice.actions.loading());

    fetch(`http://localhost:3001/api/reviews?id=${restaurantId}`)
        .then((response) => response.json())
        .then((reviews) => {
            dispatch(reviewSlice.actions.successfullyLoaded(reviews));
        })
        .catch(() => {
            dispatch(reviewSlice.actions.loadingFailed());
        });
}