import { Restaurant } from "../../components/Restaurant/Restaurant";
import { useSelector } from "react-redux";
import {
  selectRestaurantById,
  selectRestaurantRating,
} from "../../store/restaurant/selectors";

const RestaurantContainer = ({ restaurantId, className }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const rating = useSelector((state) =>
    selectRestaurantRating(state, restaurantId)
  );

  console.log("rating", rating);

  return (
    <Restaurant restaurant={restaurant} rating={rating} className={className} />
  );
};

export default RestaurantContainer;
