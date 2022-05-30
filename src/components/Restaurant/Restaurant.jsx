import React from 'react';

import styles from './styles.module.css';
import { Menu } from "../Menu/Menu";
import { Rate } from '../Rate/Rate';
import { Reviews } from '../Review/Reviews';

export const Restaurant = ({ restaurant }) => {
    return (
        <div className={styles.root}>
            <h1>{restaurant.name}</h1>
            <i>Rating:</i>
            <Rate value={restaurant.reviews.map(item => item.rating).reduce((a, b) => a + b, 0) / restaurant.reviews.length} /> 
           <br /> <i>Menu:</i>
            <Menu menu={restaurant.menu} />
            <i>Reviews:</i>
            {restaurant.reviews.map((review) => <Reviews key={review.id} name={review.user} text={review.text} rating={review.rating} />)}
        </div>
    );
}