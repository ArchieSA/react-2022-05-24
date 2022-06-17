import { selectRestaurantMenuIds } from '../../restaurant/selectors';
import { selectProductIds } from '../selectors';
import productSlice from '../index';

export function loadProductsIfNotExist(restaurantId) {
  return function (dispatch, getState) {
    const productIds = selectProductIds(getState());
    const restaurantMenu = selectRestaurantMenuIds(getState(), restaurantId);

    if (
      productIds?.length &&
      restaurantMenu?.length &&
      restaurantMenu.every(productId => productIds.includes(productId))
    ) {
      console.log('already loaded');

      return;
    }

    dispatch(productSlice.actions.startLoading());

    fetch(`http://localhost:3001/api/products?id=${restaurantId}`)
      .then(response => response.json())
      .then(products => {
        dispatch(productSlice.actions.successLoading(products));
      })
      .catch(() => {
        dispatch(productSlice.actions.failLoading());
      });
  };
}
