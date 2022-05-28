import React from 'react';
import { Restaurant } from "../Restaurant/Restaurant";

import styles from './styles.module.css';

export const Restaurants = ({restaurants}) => {
    console.log(restaurants);

    return (
        <div className={styles.root}>
            <div>
                <Restaurant restaurant={restaurants[0]} />
                <Restaurant restaurant={restaurants[1]} />
            </div>
        </div>
    );
}