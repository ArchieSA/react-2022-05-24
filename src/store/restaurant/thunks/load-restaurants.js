import restaurantSlice from "../index";
import { selectIsLoading, selectRestaurantIds } from "../selectors";

export function loadRestaurantsIfNotExist() {
  return function (dispatch, getState) {
    if (selectRestaurantIds(getState())?.length > 0) {
      console.log("restaurants already loaded");

      return;
    }

    dispatch(restaurantSlice.actions.startLoading());

    fetch("http://localhost:3001/api/restaurants")
      .then((response) => response.json())
      .then((restaurants) => {
        dispatch(restaurantSlice.actions.successLoading(restaurants));
      })
      .catch(() => {
        dispatch(restaurantSlice.actions.failLoading());
      });
  };
}
