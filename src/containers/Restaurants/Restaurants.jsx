import { Restaurants } from "../../components/Restaurants/Restaurants";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../store/restaurant/selectors";

const RestaurantsContainer = () => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return <Restaurants restaurantId={restaurantIds[0]} />;
};

export default RestaurantsContainer;
