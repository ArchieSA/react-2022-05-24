import React from "react";
import { MemoReview } from "../../components/Review/component";
import { useSelector } from "react-redux";
import { selectRewiewsUserIdById, 
         selectRewiewsTextById,
         selectRewiewsRatingById } from "../../store/reviews/selector";

const ReviewContainer = ({ id }) => {
  const reviewUserId = useSelector((state) => selectRewiewsUserIdById(state, id));
  const reviewText = useSelector((state) => selectRewiewsTextById(state, id));
  const reviewRating = useSelector((state) => selectRewiewsRatingById(state, id));
 

  return (
    <MemoReview
      userId={reviewUserId}
      text={reviewText}
      rating={reviewRating}
    />
  );
};

export default ReviewContainer;
