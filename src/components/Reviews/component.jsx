import React from "react";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import ReviewContainer from "../../containers/Review/Review";

export const Reviews = ({ reviewIds, className }) => {
  return (
    <div className={className}>
      {reviewIds.length &&
        reviewIds.map((reviewId) => (
          <ReviewContainer key={reviewId} reviewId={reviewId} />
        ))}
      <NewReviewForm />
    </div>
  );
};
