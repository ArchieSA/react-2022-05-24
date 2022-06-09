import React from "react";
import ReviewContainer from "../../containers/Review/Review";
import {NewReviewForm} from "../NewReviewForm/NewReviewForm";

export const Reviews = ({ reviewsIds }) => {
  return (
      <div>
        {reviewsIds.length &&
            reviewsIds.map((reviewId) => (
                <ReviewContainer
                    reviewId={reviewId}
                />
            ))}
          <NewReviewForm/>
      </div>
  )
};
