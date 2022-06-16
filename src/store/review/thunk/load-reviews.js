import reviewSlice from "../index";
import { selectRestaurantIds } from "../selectors";

export function loadReviewsIfNotExist(restaurantId) {
  return function (dispatch, getState) {
    //if (selectRestaurantIds(getState())?.length > 0) {
     // console.log("already loaded");

    //  return;
   // }

    dispatch(reviewSlice.actions.startLoading());

    fetch(`http://localhost:3001/api/reviews?id=${restaurantId}`)
      .then((response) => response.json())
      .then((reviews) => {
        // console.log(reviews)
        dispatch(reviewSlice.actions.successLoading(reviews));
      })
      .catch(() => {
        dispatch(reviewSlice.actions.failLoading());
      });
  };
} 
