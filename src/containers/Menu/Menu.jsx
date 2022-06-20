import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Menu from '../../components/Menu/Menu';
import { loadProductsIfNotExist } from '../../store/product/thunk/load-products';
import {
  selectIsProductsFailed,
  selectIsProductsLoading,
  selectProductIds,
} from '../../store/product/selectors';
import { selectRestaurantProductsById } from '../../store/restaurant/selectors';
import { loadAllProductsIfNotExist } from '../../store/product/thunk/load-all-products';
import { loadRestaurantsIfNotExist } from '../../store/restaurant/thunks/load-restaurants';

// if restaurantId is not passed, MenuContainer works in a standalone mode, see below
export const MenuContainer = ({ restaurantId, ...props }) => {
  const dispatch = useDispatch();
  const isProductsLoading = useSelector(selectIsProductsLoading);
  const isProductsFailed = useSelector(selectIsProductsFailed);

  const productIds = useSelector(state =>
    restaurantId
      // select products from one restaurant
      ? selectRestaurantProductsById(state, { restaurantId })
      // select all products
      : selectProductIds(state)
  );
  const loadItems = restaurantId
    // load products from one restaurant
    ? () => dispatch(loadProductsIfNotExist(restaurantId))
    // load all products, all restaurants to check if products are loaded
    : () => {
        dispatch(loadAllProductsIfNotExist());
        dispatch(loadRestaurantsIfNotExist());
      };

  useEffect(loadItems, [restaurantId]);

  if (isProductsFailed) {
    return <span>Error</span>;
  }

  if (isProductsLoading) {
    return <span>Loading</span>;
  }

  return <Menu productIds={productIds} {...props} />;
};
