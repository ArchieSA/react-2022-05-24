import { Restaurants } from "../../components/Restaurants/Restaurants";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRestaurantIsFailed,
  selectRestaurantIsLoading,
  selectRestaurantIds,
} from "../../store/restaurant/selectors";
import { useEffect } from "react";
import {
  loadProductsByRestaurantIdIfNotExist,
  loadRestaurantsIfNotExist,
} from "../../store/restaurant/thunks/load-restaurants";

const RestaurantsContainer = () => {
  const dispatch = useDispatch();
  const restaurantIds = useSelector(selectRestaurantIds);
  const isLoading = useSelector(selectRestaurantIsLoading);
  const isFailed = useSelector(selectRestaurantIsFailed);

  // load restaurants with thunk
  useEffect(() => {
    dispatch(loadRestaurantsIfNotExist());
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
