import React from "react";
import classnames from "classnames";
import {Rating} from "../Rating/Rating";
import { UserContainer } from "../../containers/User/User"

import styles from "./styles.module.css";

const Review = ({ userId, text, rating, className}) => {
  
  return (
    <div className={classnames(className, styles.root)}>
      <div className={styles.header}>
        <UserContainer userId={userId}/>
        <Rating value={rating} size="small" />
      </div>
      <span>{text}</span>
    </div>
  );
};


export const MemoReview = React.memo(Review);
