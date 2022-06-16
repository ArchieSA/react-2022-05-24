import reviewSlice from "..";

export function loadReviewsIfNotExist(restaurantId){
    return function(dispatch, getState) {
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