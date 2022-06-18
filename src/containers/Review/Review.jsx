import React from "react";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../store/review/selectors";
import { MemoReview } from "../../components/Review/Review";
import { selectReviewIsLoading } from "../../store/review/selectors";
import { selectReviewIsFailed } from "../../store/review/selectors";

const ReviewContainer = ({ reviewId, className }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));
  const isLoading = useSelector(selectReviewIsLoading);
  const isFailed = useSelector(selectReviewIsFailed);

  if (isLoading || review == undefined) {
    return null;
  }

  if (isFailed) {
    return <span>Error</span>;
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
