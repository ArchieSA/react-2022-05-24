import React from "react";
import styles from './styles.module.css'
import { Rate } from "../Rate/Rate";

const Review = ({review}) => {
  return <div class={styles.root} key={review.id}>
      <h4>{review.user}</h4>
      <p><i className={styles.textReview}>{review.text}</i></p>
      <Rate rate={review.rating} id={review.id}/>
  </div>
}

export const Reviews = ({reviews}) => {
    return (
        <div>
          <h3>Reviews</h3> 
          {reviews.map(review => {
            return <Review key={review.id} review={review}/>
          })}
        </div>
      );
}