import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import { selectIsFailed, selectIsLoading } from "../../store/product/selectors";
import { loadProductsIfNotExist } from "../../store/product/thunks/load-product";
import { selectRestaurantMenuIds } from "../../store/restaurant/selectors";

const MenuContainer = ({ restaurantId, className }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isFailed = useSelector(selectIsFailed);

  const productIds = useSelector((state) =>
    selectRestaurantMenuIds(state, restaurantId)
  );

  useEffect(() => {
    dispatch(loadProductsIfNotExist(restaurantId));
  }, [productIds]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isFailed) {
    return <span>Error</span>;
  }

  return <Menu productIds={productIds} className={className} />;
};

export default MenuContainer;
