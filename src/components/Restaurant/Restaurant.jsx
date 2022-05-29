import React from 'react';

import styles from'./styles.module.css';

import {Menu} from "../Menu/Menu";
import { Rate } from '../Rate/Rate';
import { Reviews } from '../Reviews/Reviews';

function getAverageReviewsRating (reviews) {
    let sumRating = 0;
    reviews.forEach(({rating}) => {
        sumRating = sumRating + rating;
    });

    const averageReviewsRating = Math.round(sumRating / reviews.length);

    return averageReviewsRating;
}

export const Restaurant = ({ restaurant }) => {
    const reviews = restaurant.reviews;
    const averageReviewsRating = getAverageReviewsRating(reviews);

    return (
        <div className={styles.root}>
            <h1>
                {restaurant.name}
                <Rate value={averageReviewsRating}/>
            </h1>

            <Menu menu={restaurant.menu}/>
            
            <Reviews reviews={reviews}/>
        </div>
    );
}