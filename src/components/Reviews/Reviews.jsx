import React from "react";
import { Rate } from "../Rate/Rate";
import styles from './styles.module.css'

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.root}>
      {reviews.map((review) => (
        <div key={review.id} className={styles.review}>
          <div className={styles.user}>{review.user}</div>
          <div className={styles.text}>{review.text}</div>
          <Rate value={review.rating}/>
        </div>
      ))}
    </div>
  );
};
