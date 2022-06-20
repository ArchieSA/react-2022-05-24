import { selectProductIds } from '../selectors';
import productSlice from '../index';
import { selectRestaurants } from '../../restaurant/selectors';

export function loadAllProductsIfNotExist() {
  return function (dispatch, getState) {
    const productIds = selectProductIds(getState());
    const restaurants = selectRestaurants(getState());

    if (
      productIds?.length &&
      restaurants?.length &&
      restaurants.every(restaurant =>
        restaurant.menu.every(productId => productIds.includes(productId))
      )
    ) {
      console.log('already loaded');
      return;
    }

    dispatch(productSlice.actions.startLoading(null));

    fetch('http://localhost:3001/api/products')
      .then(response => response.json())
      .then(products => {
        // reset products in store
        dispatch(productSlice.actions.reset());
        dispatch(productSlice.actions.successLoading(products));
      })
      .catch(error => {
        dispatch(productSlice.actions.failLoading(error));
      });
  };
}
