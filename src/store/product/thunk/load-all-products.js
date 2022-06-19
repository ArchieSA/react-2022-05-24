import { selectProductIds, selectProducts } from "../selectors";
import productSlice from "../index";
import { selectAllRestaurantProducts } from "../../restaurant/selectors";

export function loadAllProductsIfNotExist() {
  return function (dispatch, getState) {
    const productIds = selectProductIds(getState());
    const allRestaurantsProducts = selectAllRestaurantProducts(getState());

    if (allRestaurantsProducts.length > 0 &&
        allRestaurantsProducts.every((productId) => productIds.includes(productId))) {
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
