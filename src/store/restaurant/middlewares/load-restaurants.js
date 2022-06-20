import { loadRestaurants } from "../actions";
import restaurantSlice from "../index";
import { selectRestaurantIds } from "../selectors";

export const loadRestaurantsIfNotExistMiddleware =
  (store) => (next) => (action) => {
    if (action.type !== loadRestaurants.type) {
      return next(action);
    }

    if (selectRestaurantIds(store.getState())?.length > 0) {
      console.log("already loaded");

      return;
    }

    store.dispatch(restaurantSlice.actions.startLoading());

    fetch("http://localhost:3001/api/restaurants")
      .then((response) => response.json())
      .then((restaurants) => {
        store.dispatch(restaurantSlice.actions.successLoading(restaurants));
      })
      .catch(() => {
        store.dispatch(restaurantSlice.actions.failLoading());
      });
  };
