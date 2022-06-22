import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import { loadProductsIfNotExist } from "../../store/product/thunk/load-product";
import {
  selectIsProductsFailed,
  selectIsProductsLoading,
} from "../../store/product/selectors";
import { selectRestaurantProductsById } from "../../store/restaurant/selectors";
import {loadProducts} from "../../store/product/thunk/load-all-product";

export const MenuContainer = ({ restaurantId, ...props }) => {
  const dispatch = useDispatch();
  const isProductsLoading = useSelector(selectIsProductsLoading);
  const isProductsFailed = useSelector(selectIsProductsFailed);
  const productIds = useSelector((state) =>
    selectRestaurantProductsById(state, { restaurantId })
  );

  useEffect(() => {
    dispatch(loadProductsIfNotExist(restaurantId));
  }, [restaurantId]);
  useEffect(() => {
    dispatch(loadProducts(productIds));
  }, [productIds]);

  if (isProductsFailed) {
    return <span>Error</span>;
  }

  return isProductsLoading ? (
    <span>Loading</span>
  ) : (
    <Menu productIds={productIds} {...props} />
  );
};
