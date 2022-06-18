import reviewSlice from "../index";
import { selectReviewsExistForRestaurant, selectReviewIsLoading } from "../selectors";

function loadReviewsIfNotExist(restaurantId) {
  return function (dispatch, getState) {

    if (selectReviewIsLoading(getState()))
    {
      console.log("reviews already loading");
      return;
    }

    // Проверяем наличие ревью конкретного ресторана
    if (selectReviewsExistForRestaurant(getState(), restaurantId))
    {
      console.log("reviews already loaded");
      return;
    }

    dispatch(reviewSlice.actions.startLoading());

    fetch(`http://localhost:3001/api/reviews?id=${restaurantId}`)
      .then((response) => response.json())
      .then((reviews) => {

        // Передаем текущий стейт для агрегации данных
        dispatch(reviewSlice.actions.successLoading({
          reviewsState: getState().review,
          reviewsData: reviews
        }));

      })
      .catch(() => {
        dispatch(reviewSlice.actions.failLoading());
      });
  };
}

export default loadReviewsIfNotExist;
