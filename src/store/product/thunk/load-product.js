import { selectProductIds } from '../selectors';
import productSlice from '../index';

export function loadProductIfNotExist(productId) {
  return function (dispatch, getState) {
    const productIds = selectProductIds(getState());

    const queryParams = `?${new URLSearchParams({
      productId,
    })}`;

    if (productIds?.length && productIds.includes(productId)) {
      console.log('already loaded');
      return;
    }

    dispatch(productSlice.actions.startLoading(null));

    fetch(`http://localhost:3001/api/products${queryParams}`)
      .then(response => response.json())
      .then(product => {
        dispatch(productSlice.actions.successLoading([product]));
      })
      .catch(error => {
        dispatch(productSlice.actions.failLoading(error));
      });
  };
}
