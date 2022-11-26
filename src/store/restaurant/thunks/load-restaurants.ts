import restaurantSlice from "../index";
import { selectRestaurantIds } from "../selectors";
import { RootState } from "../../store";
import { useAppDispatch } from "../../../hooks/hook_ts";
import {Dispatch} from "redux";

export function loadRestaurantsIfNotExist() {
  return function (dispatch: Dispatch, getState: () => RootState) {
    if (selectRestaurantIds(getState())?.length > 0) {
      console.log("already loaded");

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
