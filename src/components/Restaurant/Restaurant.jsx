import React from 'react';

import styles from'./styles.module.css';
import { Menu } from "../Menu/Menu";
import { Rate } from "../Rate/Rate";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
    const rating = calculateRating(restaurant.reviews);
    return (
        <div className={styles.root}>
            <h1>{restaurant.name}</h1>
            <Rate value={rating}/>
            <Menu menu={restaurant.menu} />
            <Reviews reviews={restaurant.reviews} />
        </div>
    );
}

function calculateRating(reviews) {
    let sum = reviews.reduce((sum, review) => {
        return sum + review.rating
    }, 0);
    return Math.round(sum / reviews.length);
}