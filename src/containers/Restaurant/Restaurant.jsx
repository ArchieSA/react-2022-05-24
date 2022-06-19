import { Restaurant } from "../../components/Restaurant/Restaurant";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRestaurantById,
  selectRestaurantRating,
} from "../../store/restaurant/selectors";
import { useEffect } from "react";
import { loadReviewsIfNotExist } from "../../store/review/thunks/load-reviews";

const RestaurantContainer = ({ restaurantId, className }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const rating = useSelector((state) =>
    selectRestaurantRating(state, restaurantId)
  );
  useEffect(() => {
    dispatch(loadReviewsIfNotExist(restaurantId));
  });

  const dispatch = useDispatch();


  return (
    <Restaurant restaurant={restaurant} rating={rating} className={className} />
  );
};

export default RestaurantContainer;
