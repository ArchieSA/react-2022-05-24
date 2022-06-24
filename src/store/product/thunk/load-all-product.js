import { selectProductIds } from "../selectors";
import productSlice from "../index";
import {selectRestaurantAllProducts, selectRestaurantProductsById} from "../../restaurant/selectors";

export function loadProducts(restaurantId) {
  return function (dispatch, getState) {
    const productIds = selectProductIds(getState());
    const restaurantProducts = selectRestaurantAllProducts(getState());

    if (
        restaurantProducts.length > 0 &&
      restaurantProducts.every((productId) => productIds.includes(productId))
    ) {
      return;
    }

    dispatch(productSlice.actions.startLoading(null));

    fetch(
      `http://localhost:3001/api/products?${new URLSearchParams({
        id: restaurantId,
      }).toString()}`
    )
      .then((response) => response.json())
      .then((products) => {
        dispatch(productSlice.actions.successLoading(products));
      })
      .catch((error) => {
        dispatch(productSlice.actions.failLoading(error));
      });
  };
}
