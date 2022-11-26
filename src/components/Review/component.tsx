import React from "react";
import classnames from "classnames";
import {Rating} from "../Rating/Rating";
import styles from "./styles.module.css";

interface ReviewProps {
    className: string;
    user: string;
    text: string;
    rating: number;
}

const Review = ({ user, text, rating, className }: ReviewProps) => {
  return (
    <div className={classnames(className, styles.root)}>
      <div className={styles.header}>
        <span className={styles.user}>{user}</span>
        <Rating value={rating} size="small" />
      </div>
      <span>{text}</span>
    </div>
  );
};


export const MemoReview = React.memo(Review);
