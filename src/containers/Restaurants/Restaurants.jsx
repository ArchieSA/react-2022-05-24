import { Restaurants } from "../../components/Restaurants/Restaurants";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsFailed,
  selectIsLoading,
  selectRestaurantIds,
} from "../../store/restaurant/selectors";
import { useEffect } from "react";
import {
  loadProductsByRestaurantIdIfNotExist,
  loadRestaurantsIfNotExist,
} from "../../store/restaurant/thunks/load-restaurants";
import { loadProductsIfNotExist } from "../../store/product/thunks/load-products";

const RestaurantsContainer = () => {
  const dispatch = useDispatch();
  const restaurantIds = useSelector(selectRestaurantIds);
  const isLoading = useSelector(selectIsLoading);
  const isFailed = useSelector(selectIsFailed);

  // load restaurants with thunk
  useEffect(() => {
    dispatch(loadRestaurantsIfNotExist());
    dispatch(loadProductsIfNotExist());
  }, []);

  // load restaurants with middleware
  // useEffect(() => {
  //   dispatch(loadRestaurants());
  // }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isFailed) {
    return <span>Error</span>;
  }

  return restaurantIds?.length > 0 ? (
    <Restaurants restaurantIds={restaurantIds} />
  ) : null;
};

export default RestaurantsContainer;
