import React from "react";
import classnames from "classnames";
import {Rating} from "../Rating/Rating";


import styles from "./styles.module.css";
import { UsersContainer } from "../../containers/Users/UsersContainer";

export const Review = ({ userId, text, rating, className }) => {
  return (
    <div className={classnames(className, styles.root)}>
      <div className={styles.header}>
        <span className={styles.user}><UsersContainer userId = {userId}/></span>
        <Rating value={rating} size="small" />
      </div>
      <span>{text}</span>
    </div>
  );
};



