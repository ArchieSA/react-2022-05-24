import productSlice from '../../product/index';
import { selectProductIds } from '../../product/selectors';

export function loadProductsIfNotExist() {
  return function (dispatch, getState) {
    if (selectProductIds(getState())?.length > 0) {
      console.log('already loaded');

      return;
    }

    dispatch(productSlice.actions.startLoading());

    fetch('http://localhost:3001/api/products')
      .then(response => response.json())
      .then(products => {
        dispatch(productSlice.actions.successLoading(products));
      })
      .catch(() => {
        dispatch(productSlice.actions.failLoading());
      });
  };
}
