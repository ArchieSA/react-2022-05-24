
import productSlice from "../index";

export function loadProductDetails(productId) {
  return function (dispatch, getState) {

    dispatch(productSlice.actions.startLoading(null));

    fetch(
      `http://localhost:3001/api/products?${productId}`
    )
      .then((response) => response.json())
      .then((product) => {
        dispatch(productSlice.actions.successLoading(product));
      })
      .catch((error) => {
        dispatch(productSlice.actions.failLoading(error));
      });
  };
}
