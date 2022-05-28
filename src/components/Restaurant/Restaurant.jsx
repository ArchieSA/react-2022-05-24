import React from 'react';

import styles from'./styles.module.css';
import {Menu} from "../Menu/Menu";
import {Rate} from "../Rate/Rate";
import {Reviews} from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
    let rate = 0;
    restaurant.reviews.forEach((x) => rate += x.rating);
    rate = Math.round(rate / restaurant.reviews.length);

    return (
        <div className={styles.root}>
            <h1>{restaurant.name}</h1>
            <Rate rate={rate} />
            <Menu menu={restaurant.menu} />
            <Reviews reviews={restaurant.reviews} />
        </div>
    );
}