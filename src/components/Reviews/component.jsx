import React from "react";
import {MemoReview} from "../Review/component";
import {NewReviewForm} from "../NewReviewForm/NewReviewForm";

export const Reviews = ({ reviews }) => {
  return (
      <div>
        {reviews.length &&
            reviews.map((review) => (
                <MemoReview
                    key={review.id}
                    user={review.user}
                    text={review.text}
                    rating={review.rating}
                />
            ))}
          <NewReviewForm/>
      </div>
  )
};
