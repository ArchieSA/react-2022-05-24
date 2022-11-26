import { selectProductIds } from "../selectors";
import productSlice from "../index";
import {
  selectAllRestaurantProducts,
  selectRestaurantProductsById,
  selectRestaurants,
} from "../../restaurant/selectors";
import { useAppDispatch } from "../../../hooks/hook_ts";
import { RootState } from "../../store";
import { Dispatch } from "redux";

export function loadProducts() {
  return function (dispatch: Dispatch, getState: () => RootState) {
    const productIds = selectProductIds(getState());
    // console.log(productIds);
    const restaurantProducts = selectAllRestaurantProducts(getState());
    // console.log(restaurantProducts);
    if (
      restaurantProducts.length > 0 &&
      restaurantProducts.every((productId) => productIds.includes(productId))
    ) {
      return;
    }

    dispatch(productSlice.actions.startLoading(null));

    fetch(`http://localhost:3001/api/products`)
      .then((response) => response.json())
      .then((products) => {
        dispatch(productSlice.actions.successLoading(products));
      })
      .catch((error) => {
        dispatch(productSlice.actions.failLoading(error));
      });
  };
}
