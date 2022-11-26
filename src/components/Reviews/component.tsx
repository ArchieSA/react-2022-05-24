import React from "react";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import ReviewContainer from "../../containers/Review/Review";
import { Review } from "../../store/review";
import { User } from "../../store/user";
import styles from "./styles.module.css";

type ReviewProps = {
  reviewIds: (string | undefined)[];
  addNewReview: (f: { NewReview: Review; NewUser: User }) => {
    NewReview: Review;
    NewUser: User;
  };
};

export const Reviews: React.FC<ReviewProps> = ({
  reviewIds,
  addNewReview = (f) => f,
}) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.reviews}>
        {reviewIds?.length &&
          reviewIds?.map((reviewId) => (
            <ReviewContainer key={reviewId} reviewId={reviewId} />
          ))}
        {/*<ReviewNewContainer addNew={addNew}/>*/}
        <NewReviewForm onAdd={addNewReview} reviewIds={reviewIds} />
      </div>
    </div>
  );
};
