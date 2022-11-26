import React from "react";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../store/review/selectors";
import { MemoReview } from "../../components/Review/Review";
import { useAppSelector } from "../../hooks/hook_ts";
import {Review} from "../../store/review";

type ReviewContainerProps = {
  reviewId?: string;
  // addNew: (f: Review) => Review
};
const ReviewContainer: React.FC<ReviewContainerProps> = ({ reviewId }) => {
  const review = useAppSelector((state) => selectReviewById(state, reviewId));
  if (!review) {
    return null;
  }
  console.log(review);
  // const reviewNew = useAppSelector((state) => selectReviewById(state, reviewId));
  const { text, rating, userId } = review;
  return <MemoReview text={text} rating={rating} userId={userId} />;
};

export default ReviewContainer;
