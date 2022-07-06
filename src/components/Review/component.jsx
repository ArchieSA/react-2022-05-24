import React from "react";
import classnames from "classnames";
import {Rating} from "../Rating/Rating";


import styles from "./styles.module.css";

const Review = ({ user, text, rating, className }) => {
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
