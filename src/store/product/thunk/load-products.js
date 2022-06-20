import { selectProductIds } from '../selectors';
import productSlice from '../index';
import { selectRestaurantProductsById } from '../../restaurant/selectors';

export function loadProductsIfNotExist(restaurantId) {
  return function (dispatch, getState) {
    const productIds = selectProductIds(getState());

    const restaurantProducts = selectRestaurantProductsById(getState(), {
      restaurantId,
    });

    const queryParams = `?${new URLSearchParams({
      restaurantId,
    })}`;

    if (
      productIds?.length &&
      restaurantProducts.every(productId => productIds.includes(productId))
    ) {
      console.log('already loaded');
      return;
    }

    dispatch(productSlice.actions.startLoading(null));

    fetch(`http://localhost:3001/api/products${queryParams}`)
      .then(response => response.json())
      .then(products => {
        dispatch(productSlice.actions.successLoading(products));
      })
      .catch(error => {
        dispatch(productSlice.actions.failLoading(error));
      });
  };
}
