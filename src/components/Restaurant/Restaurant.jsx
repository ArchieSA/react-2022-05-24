import React from 'react';

import styles from'./styles.module.css';
import {Menu} from "../Menu/Menu";
import {Rate} from "../Rate/Rate";
import { Review } from '../Review/Review';




export const Restaurant = ({ restaurant }) => {
    const reviews = restaurant.reviews;
    let sum = 0;
    reviews.map((review) => sum += review.rating );
    let middle_rate = Math.ceil(sum / reviews.length);
    return (
        <div className={styles.root}>
            <h1>{restaurant.name}</h1>
            <Rate rate={middle_rate}/>
            <Menu menu={restaurant.menu}/>
            {
             reviews.map((review) => <Review  key={review.id} review={review}/> )
            }

        </div>
    );
}