import React from "react";
import classnames from "classnames";
import {Rating} from "../Rating/Rating";
import styles from "./styles.module.css";
import UserContainer from "../../containers/User/User";

const Review = ({ userId, text, rating, className }) => {
  return (
    <div className={classnames(className, styles.root)}>
      <div className={styles.header}>
        <UserContainer className={styles.user} userId={userId} />
        <Rating value={rating} size="small" />
      </div>
      <span>{text}</span>
    </div>
  );
};

export default Review;
