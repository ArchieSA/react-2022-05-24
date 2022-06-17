import { Restaurants } from "../../components/Restaurants/Restaurants";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsFailed,
  selectIsLoading,
  selectRestaurantIds,
} from "../../store/restaurant/selectors";
import { useEffect } from "react";
import { loadRestaurantsIfNotExist } from "../../store/restaurant/thunks/load-restaurants";

const RestaurantsContainer = () => {
  const dispatch = useDispatch();
  const restaurantIds = useSelector(selectRestaurantIds);
  const isLoading = useSelector(selectIsLoading);
  const isFailed = useSelector(selectIsFailed);

  // load restaurants with thunks
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
