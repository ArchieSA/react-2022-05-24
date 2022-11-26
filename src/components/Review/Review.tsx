import React from "react";
import classnames from "classnames";
import { Rating } from "../Rating/Rating";
import styles from "./styles.module.css";
import UserContainer from "../../containers/User/User";

interface ReviewProps {
    userId: string;
    text: string;
    rating: number;
}
const Review: React.FC<ReviewProps> = ({ userId, text, rating }) => {
  return (
    <div className={classnames(styles.root)}>
      <div className={styles.header}>
        <UserContainer userId={userId} className={styles.user} />
        <Rating value={rating} size="small" />
      </div>
      <span>{text}</span>
    </div>
  );
};

export const MemoReview = React.memo(Review);
