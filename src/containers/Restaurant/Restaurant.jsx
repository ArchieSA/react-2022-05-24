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
  //const rating = useSelector((state) =>
   // selectRestaurantRating(state, restaurantId)
 // );
  return restaurantId?.length > 0 ? (
  <Restaurant restaurant={restaurant} rating={4} className={className} />
  ) : null;
};

export default RestaurantContainer;
