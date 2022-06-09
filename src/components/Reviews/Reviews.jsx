import React from "react";
import { ReviewContainer } from "../../containers/ReviewContainer/ReviewContainer";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map((reviewId) => (
        <ReviewContainer
          key={reviewId}
          reviewId={reviewId}
        />
      ))
      }
      <NewReviewForm/>
    </div>
  )
}
