import React, {useState} from 'react';

import styles from'./styles.module.css';
import {MemoMenu, Menu} from "../Menu/Menu";
import { RatingStatic } from '../Rating/RatingStatic/RatingStatic';
import {Reviews} from "../Reviews/component";

export const Restaurant = ({ restaurant }) => {
    const restaurantRate = Math.ceil(
        restaurant.reviews.reduce((prev, curr) => prev + curr.rating, 0) /
        restaurant.reviews.length
    );

    return (
        <div className={styles.root}>
            <div className={styles.mainInfo}>
                <span className={styles.restaurantName}>{restaurant.name}</span>
                <RatingStatic value={restaurantRate} />
            </div>
            <div className={styles.detailedInfo}>
                <MemoMenu
                    menu={restaurant.menu}
                    className={styles.menu}
                />
                <div className={styles.reviews}>
                    <Reviews reviews={restaurant.reviews} />
                </div>
            </div>
        </div>
    );
}