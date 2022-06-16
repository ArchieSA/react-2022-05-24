import React from "react";
import { useSelector, useDispatch } from "react-redux";
//import { selectReviewById } from "../../store/review/selectors";
import { useEffect } from "react";
import { Reviews } from "../../components/Reviews/component";
import { selectIsFailed,  selectIsLoading } from "../../store/product/selectors";
import {
    loadReviewsIfNotExist,
  } from "../../store/review/thunk/load-reviews";




export const ReviewsContainer = ({ reviewIds }) => {
  //const review = useSelector((state) => selectReviewById(state, reviewId));

 // if (!review) {
   // return null;
 // }

  //const { text, rating, userId } = review;
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isFailed = useSelector(selectIsFailed);

  useEffect(() => {
    dispatch(loadReviewsIfNotExist(reviewIds));
  }, []);


  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isFailed) {
    return <span>Error</span>;
  }

  return reviewIds?.length > 0 ? (
    <Reviews
    reviewIds = {reviewIds}
    />
  ) : null;
};

//export default ReviewsContainer;
