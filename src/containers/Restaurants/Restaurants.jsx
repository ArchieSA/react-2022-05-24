import { Restaurants } from "../../components/Restaurants/Restaurants";
import { useDispatch, useSelector } from "react-redux";
import { selectActive, selectRestaurantIds } from "../../store/restaurant/selectors";
import restaurantSlice from "../../store/restaurant";
import { useCallback } from "react";

const RestaurantsContainer = () => {
  const dispatch = useDispatch();
  const restaurantIds = useSelector(selectRestaurantIds);
  const currentRestaurantId = useSelector(selectActive);
  const onSelectRestaurant = useCallback(restaurantId => dispatch(restaurantSlice.actions.selectActive(restaurantId)), [currentRestaurantId]);

  return <Restaurants
    restaurantIds={restaurantIds}
    currentRestaurantId={currentRestaurantId}
    setCurrentRestaurantId={onSelectRestaurant}  />;
};

export default RestaurantsContainer;
