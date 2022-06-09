import React from "react";
import ReviewContainer from "../../containers/Review/Review";
import {NewReviewForm} from "../NewReviewForm/NewReviewForm";

export const Reviews = ({ reviewsIds }) => {
  return (
      <div>
        {reviewsIds.length &&
            reviewsIds.map((reviewId) => (
                <ReviewContainer
                    key={reviewId}
                    user={reviewId}
                    text={reviewId}
                    rating={reviewId}
                />
            ))}
          <NewReviewForm/>
      </div>
  )
};
