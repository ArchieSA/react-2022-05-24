import { Restaurant } from "../../components/Restaurant/Restaurant";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/restaurant/selectors";

const RestaurantContainer = ({ restaurantId, className }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return <Restaurant restaurant={restaurant} className={className} />;
};

export default RestaurantContainer;
