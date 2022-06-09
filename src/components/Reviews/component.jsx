import React from "react";
import { ReviewContainer } from "../../containers/Review/Review"

export const Reviews = ({ reviews }) => {
  return (
      <div>
        {reviews.length &&
            reviews.map((review) => (
            <ReviewContainer key ={review} reviewId = {review}/>
            ))}
      </div>
  )
};
