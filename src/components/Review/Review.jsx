import React from "react";
import classnames from "classnames";
import { Rating } from "../Rating/Rating";

import styles from "./styles.module.css";

const Review = ({ user, text, rating, className }) => {
  return (
    <div className={classnames(className, styles.root)}>
      <div className={styles.header}>
        <h3 className={styles.user}>{user}</h3>
        <Rating value={rating} size="small" />
      </div>
      <span>{text}</span>
    </div>
  );
};


export default Review;
