import productSlice from "../index";
import { selectProductIds } from "../selectors";
import { selectRestaurantMenuIds } from "../../restaurant/selectors";

export function loadProductsIfNotExist(restaurantId) {
  return function (dispatch, getState) {
    const restauranMenuIds = selectRestaurantMenuIds(getState(), restaurantId);
    const loadedProductIds = selectProductIds(getState());
    const missingProducts = restauranMenuIds.filter(
      (id) => !loadedProductIds.includes(id)
    );

    if (missingProducts.length === 0) {
      console.log("Products loaded");

      return;
    }

    dispatch(productSlice.actions.startLoading());

    fetch(`http://localhost:3001/api/products?id=${restaurantId}`)
      .then((response) => response.json())
      .then((products) => {
        dispatch(productSlice.actions.successLoading(products));
      })
      .catch(() => {
        dispatch(productSlice.actions.failLoading());
      });
  };
}
