import React from "react";
import { useSelector } from "react-redux";
import { MemoReview } from "../../components/Review/component";
import { selectReviewById } from "../../store/review/selectors";

const ReviewContainer = ({ reviewId, className }) => {
  const { userId, text, rating } = useSelector((state) =>
    selectReviewById(state, reviewId)
  );

  return (
    <MemoReview
      userId={userId}
      text={text}
      rating={rating}
      className={className}
    />
  );
};

export default ReviewContainer;
