import React from "react";
import { MemoReview } from "../Review/component";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import ReviewContainer from "../../containers/Review/Review";

export const Reviews = ({ reviewIds, className }) => {
  return (
    <div className={className}>
      {reviewIds.length &&
        reviewIds.map((reviewId) => (
          // <MemoReview
          //   key={review.id}
          //   user={review.user}
          //   text={review.text}
          //   rating={review.rating}
          // />
          <ReviewContainer key={reviewId} reviewId={reviewId} />
        ))}
      <NewReviewForm />
    </div>
  );
};
