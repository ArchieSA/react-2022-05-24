import { Restaurants } from "../../components/Restaurants/Restaurants";
import { useSelector } from "react-redux";
import { selectRestaurants } from "../../store/restaurant/selectors";

const RestaurantsContainer = () => {
  const restaurants = useSelector(selectRestaurants);

  return <Restaurants restaurants={restaurants} />;
};

export default RestaurantsContainer;
