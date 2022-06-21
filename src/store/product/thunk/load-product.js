import productSlice from "..";
import { selectProductIsLoaded } from "../selectors";

export function loadProductIfNotExist(productId) {
  return function (dispatch, getState) {
    const productIsLoaded = selectProductIsLoaded(getState(), productId);
    console.log("--" + productId);
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
