import React from "react";
import classnames from "classnames";
import { RatingStatic } from "../Rating/RatingStatic/RatingStatic";

import styles from "./styles.module.css";

const Review = ({ user, text, rating, className }) => {
  return (
    <div className={classnames(className, styles.root)}>
      <div className={styles.header}>
        <span className={styles.user}>{user}</span>
        <RatingStatic value={rating} size="small" />
      </div>
      <span>{text}</span>
    </div>
  );
};


export const MemoReview = React.memo(Review);
