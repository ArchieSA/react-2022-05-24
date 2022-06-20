import { Restaurant } from "../../components/Restaurant/Restaurant";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRestaurantById,
  selectRestaurantRating,
} from "../../store/restaurant/selectors";
import { useEffect } from "react";
import { loadReviewsIfNotExist } from "../../store/review/thunk/load-reviews";
import { useParams } from "react-router-dom";

const RestaurantContainer = ({ className }) => {
  const { id: restaurantId } = useParams();
  const dispatch = useDispatch();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const rating = useSelector((state) =>
    selectRestaurantRating(state, restaurantId)
  );

  useEffect(() => {
    dispatch(loadReviewsIfNotExist(restaurantId));
  }, [restaurantId]);

  return (
    <Restaurant restaurant={restaurant} rating={rating} className={className} />
  );
};

export default RestaurantContainer;
