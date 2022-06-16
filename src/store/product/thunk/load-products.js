import productSlice from "../index";
import { selectRestaurantIds } from "../selectors";

export function loadProductsIfNotExist(restaurantId) {
  return function (dispatch, getState) {
    //if (selectRestaurantIds(getState())?.length > 0) {
     // console.log("already loaded");

    //  return;
   // }
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
