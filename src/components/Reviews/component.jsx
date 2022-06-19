import React from "react";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import ReviewContainer from "../../containers/Review/Review";
import styles from "./styles.module.css";
import classNames from "classnames";

export const Reviews = ({ reviewIds, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      {reviewIds?.length &&
        reviewIds?.map((reviewId) => (
          <ReviewContainer key={reviewId} reviewId={reviewId} />
        ))}
      <NewReviewForm />
    </div>
  );
};
