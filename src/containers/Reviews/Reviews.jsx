import { useDispatch, useSelector } from "react-redux";
import { selectIsFailed, selectIsLoading } from "../../store/review/selectors";
import { selectRestaurantReviewIds } from "../../store/restaurant/selectors";
import { useEffect } from "react";
import { loadReviewsIfNotExist } from "../../store/review/thunks/load-review";
import { Reviews } from "../../components/Reviews/component";

export const ReviewsContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isFailed = useSelector(selectIsFailed);
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewIds(state, restaurantId)
  );

  useEffect(() => {
    dispatch(loadReviewsIfNotExist(restaurantId));
  }, [reviewIds]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isFailed) {
    return <span>Error</span>;
  }

  return <Reviews reviewIds={reviewIds} />;
};
