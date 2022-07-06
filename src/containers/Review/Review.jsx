import React from "react";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../store/review/selectors";
import { MemoReview } from "../../components/Review/Review";

const ReviewContainer = ({ reviewId, className }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));

  if (!review) {
    return null;
  }

  const { text, rating, userId } = review;

  return (
    <MemoReview
      text={text}
      rating={rating}
      userId={userId}
      className={className}
    />
  );
};

export default ReviewContainer;
