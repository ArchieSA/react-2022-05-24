import productSlice from "..";
import { selectProductIds } from "../selectors";

export function loadAllProducts() {
  return function (dispatch, getState) {


    const productIds = selectProductIds(getState());


    dispatch(productSlice.actions.startLoading(null));

    fetch(
        `http://localhost:3001/api/products`
      )
        .then((response) => response.json())
        .then((products) => {
            if(products.length===productIds) {
                return;
            }
          dispatch(productSlice.actions.successLoading(products));
        })
        .catch((error) => {
          dispatch(productSlice.actions.failLoading(error));
        });
    };
}
