import { Restaurant } from "../../components/Restaurant/Restaurant";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRestaurantById,
  selectRestaurantRating,
} from "../../store/restaurant/selectors";
import loadReviewsIfNotExist from "../../store/review/thunks/load-review";
import loadProductsIfNotExist from "../../store/product/thunks/load-product";
import { useEffect } from "react";

const RestaurantContainer = ({ restaurantId, className }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const rating = useSelector((state) =>
    selectRestaurantRating(state, restaurantId)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsIfNotExist(restaurantId));
    dispatch(loadReviewsIfNotExist(restaurantId));
  }, [restaurantId]);

  return (
    <Restaurant restaurant={restaurant} rating={rating} className={className} />
  );
};

export default RestaurantContainer;
