import React from "react";
import {NewReviewForm} from "../NewReviewForm/NewReviewForm";
import ReviewContainer from "../../containers/Review/Review";
import styles from './styles.module.css'
import classNames from "classnames";

export const Reviews = ({ className, reviewIds }) => {
  return (
    <div className={classNames(className, styles.root)}>
      <h3>Reviews</h3>

      {reviewIds.map(reviewId => 
        <ReviewContainer key={reviewId} reviewId={reviewId} />
      )}

      <h3>New Review</h3>
      <NewReviewForm/>
    </div>
  )
};
