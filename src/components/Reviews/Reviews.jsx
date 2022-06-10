import React from "react";
import ReviewContainer from "../../containers/Review/Review";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";

const Reviews = ({ reviewIds, className }) => {
  return (
      <div>
        {reviewIds.length && reviewIds.map((id) => (
                <ReviewContainer className={className} key={id} reviewId={id}/>
            ))}
          <NewReviewForm/>
      </div>
  )
};

export default Reviews;