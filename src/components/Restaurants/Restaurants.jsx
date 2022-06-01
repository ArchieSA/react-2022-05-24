import React, {useState} from 'react';
import { Restaurant } from "../Restaurant/Restaurant";

import styles from './styles.module.css';

export const Restaurants = ({restaurants}) => {
    const [activeRestaurant, setActiveRestaurant] = useState(0);

    return (<div className={styles.root}>
        <div>
            <Restaurant restaurant={restaurants[activeRestaurant]}/>
        </div>
    </div>)
}