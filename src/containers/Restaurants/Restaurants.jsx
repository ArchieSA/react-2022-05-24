import { Restaurants } from "../../components/Restaurants/Restaurants";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../store/restaurant/selectors";

const RestaurantsContainer = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  // console.log(restaurantIds)

  return <Restaurants restaurantIds={restaurantIds} />;
};

export default RestaurantsContainer;
