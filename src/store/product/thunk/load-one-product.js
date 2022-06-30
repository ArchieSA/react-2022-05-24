import {selectProductById, selectProductIds} from "../selectors";
import productSlice from "../index";
import {
  selectAllRestaurantProducts,
  selectRestaurantProductsById,
  selectRestaurants,
} from "../../restaurant/selectors";

export function loadProductIfNot(productId) {
  return function (dispatch, getState) {
    const product =  selectProductById(getState(), productId);
    if
    (product) {
        return
    }

    dispatch(productSlice.actions.startLoading(null));

    fetch(
        `http://localhost:3001/api/products?${new URLSearchParams({
          id: productId,
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
