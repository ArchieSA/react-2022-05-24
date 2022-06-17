import { Restaurant } from '../../components/Restaurant/Restaurant';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRestaurantById,
  selectRestaurantRating,
} from '../../store/restaurant/selectors';
import {
  selectIsFailed as selectIsFailedLoadingReviews,
  selectIsLoading as selectIsLoadingReviews,
  selectReviewIds,
} from '../../store/review/selectors';
import { loadReviewsIfNotExist } from '../../store/review/thunks/load-reviews';
import { useEffect } from 'react';
import {
  selectProductIds,
  selectIsLoading as selectIsLoadingProducts,
  selectIsFailed as selectIsFailedLoadingProducts,
} from '../../store/product/selectors';
import { loadProductsIfNotExist } from '../../store/product/thunks/load-products';

const RestaurantContainer = ({ restaurantId, className }) => {
  const dispatch = useDispatch();
  const productIds = useSelector(selectProductIds);
  const isLoadingProducts = useSelector(selectIsLoadingProducts);
  const failedLoadingProducts = useSelector(selectIsFailedLoadingProducts);
  const reviewIds = useSelector(selectReviewIds);
  const isLoadingReviews = useSelector(selectIsLoadingReviews);
  const failedLoadingReviews = useSelector(selectIsFailedLoadingReviews);

  const restaurant = useSelector(state =>
    selectRestaurantById(state, restaurantId)
  );

  const rating = useSelector(state =>
    selectRestaurantRating(state, restaurantId)
  );

  const isLoading = isLoadingProducts || isLoadingReviews;
  const isFailed = failedLoadingProducts || failedLoadingReviews;

  useEffect(() => {
    dispatch(loadProductsIfNotExist(restaurantId));
    dispatch(loadReviewsIfNotExist(restaurantId));
  }, [restaurantId]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isFailed) {
    return <span>Error</span>;
  }

  return productIds?.length && reviewIds?.length ? (
    <Restaurant restaurant={restaurant} rating={rating} className={className} />
  ) : null;
};

export default RestaurantContainer;
