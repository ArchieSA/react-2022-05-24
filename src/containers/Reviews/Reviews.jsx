import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Reviews } from "../../components/Reviews/component";
import {
  selectIsReviewsFailed,
  selectIsReviewsLoading,
} from "../../store/review/selectors";
import { loadUsersIfNotExist } from "../../store/user/thunks/load-users";
import { selectRestaurantReviewsById } from "../../store/restaurant/selectors";

export const ReviewsContainer = ({ restaurantId, ...props }) => {
  const dispatch = useDispatch();
  const isReviewsLoading = useSelector(selectIsReviewsLoading);
  const isReviewsFailed = useSelector(selectIsReviewsFailed);
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, { restaurantId })
  );

  useEffect(() => {
    dispatch(loadUsersIfNotExist());
  }, []);

  if (isReviewsFailed) {
    return <span>Error</span>;
  }

  return isReviewsLoading ? (
    <span>Loading</span>
  ) : (
    <Reviews reviewIds={reviewIds} {...props} />
  );
};
