import reviewSlice from "..";
import { selectReviewsIds } from "../selectors";
import { selectRestaurantReviewIds } from "../../restaurant/selectors";

export function loadReviewsIfNotExist(restaurantId){
    return function(dispatch, getState) {

        const restaurantReviewsIds = selectRestaurantReviewIds(getState(), restaurantId);

        const loadedReviewsIds = selectReviewsIds(getState());
        const missingReviews = restaurantReviewsIds.filter(
            (id) => !loadedReviewsIds.includes(id)
        );
        
        if(missingReviews.length === 0) {
            return;
        }

        dispatch(reviewSlice.actions.startLoading());

        fetch(`http://localhost:3001/api/reviews?id=${restaurantId}`)
        .then((responce) => responce.json())
        .then((reviews) => {
            dispatch(reviewSlice.actions.successLoading(reviews));
        })
        .catch(() => {
            console.log('Error');
            dispatch(reviewSlice.actions.failLoading());
        })
    }
}