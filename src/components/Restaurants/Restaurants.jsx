import React, {useState} from 'react';
import { Restaurant } from "../Restaurant/Restaurant";

import styles from './styles.module.css';
import {MAX_RATING} from "../Rating/constants";
import Star from "../Rating/img/star.svg";
import GoldStar from "../Rating/img/star-gold.svg";
import classnames from "classnames";

export const Restaurants = ({restaurants}) => {
    const [activeRestaurant, setActiveRestaurant] = useState(0);
    const MAX_RESTORANTS = restaurants.length;
    return (<div className={styles.root}>
        <div>
            <div className={styles.buttonGroup}>
            {new Array(MAX_RESTORANTS).fill(null).map((_, index) => (

                <button
                key={index}

                onClick={() => setActiveRestaurant(index)}
                className={styles.button}
                >
                    {restaurants[index].name}
                </button>
            ))}
            </div>
            <Restaurant restaurant={restaurants[activeRestaurant]}/>
        </div>
    </div>)
}