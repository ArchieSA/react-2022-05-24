import React from 'react';
import { Restaurant } from "../Restaurant/Restaurant";

import styles from './styles.module.css';

export const Restaurants = ({restaurants}) => {
    return (
        <div className={styles.root}>
            {restaurants.map((item) => {
                return <Restaurant restaurant={item} />
            })}
        </div>
    );
}