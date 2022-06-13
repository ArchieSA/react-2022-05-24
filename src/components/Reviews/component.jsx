import React from "react";
import ReviewContainer from "../../containers/Review/Review";
import {NewReviewForm} from "../NewReviewForm/NewReviewForm";

export const Reviews = ({ reviews }) => {
  return (
      <div>
        {reviews.length &&
            reviews.map((reviewId) => (
                <ReviewContainer
                    key={reviewId}
                    id={reviewId}
                />
            ))}
          <NewReviewForm/>
      </div>
  )
};
