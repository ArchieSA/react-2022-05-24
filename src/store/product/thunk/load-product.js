import { selectProductIds, selectProductIsLoaded } from "../selectors";
import productSlice from "../index";
import {
  selectAllRestaurantProducts,
  selectRestaurantProductsById,
} from "../../restaurant/selectors";

export function loadProductsIfNotExist(restaurantId) {
  return function (dispatch, getState) {
    const productIds = selectProductIds(getState());
    const restaurantProducts = selectRestaurantProductsById(getState(), {
      restaurantId,
    });

    if (
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
export function loadProductListIfNotExist() {
  return function (dispatch, getState) {
    const productIds = selectProductIds(getState());
    const allRestaurantsProducts = selectAllRestaurantProducts(getState());

    if (
      allRestaurantsProducts.length > 0 &&
      allRestaurantsProducts.every((productId) =>
        productIds.includes(productId)
      )
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

export function loadProductIfNotExist(productId) {
  return function (dispatch, getState) {
    const productIsLoaded = selectProductIsLoaded(getState(), productId);

    if (productIsLoaded) {
      return;
    }

    dispatch(productSlice.actions.startLoading(null));

    fetch(`http://localhost:3001/api/products?productId=${productId}`)
      .then((response) => response.json())
      .then((products) => {
        dispatch(productSlice.actions.successLoading(products));
      })
      .catch((error) => {
        dispatch(productSlice.actions.failLoading(error));
      });
  };
}
