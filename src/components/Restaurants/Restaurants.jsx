import React, {useState} from 'react';
import { Restaurant } from "../Restaurant/Restaurant";

import styles from './styles.module.css';

export const Restaurants = ({restaurants}) => {
    const [activeRestaurant, setActiveRestaurant] = useState(0);

    return (<div className={styles.root}>
        <div>
            <div className={styles.tab_wrapper}>
                {restaurants.map(({name}, index) => (
                    <button
                        key={index}
                        onClick={()=>setActiveRestaurant(index)}
                        className={styles.tab_button}
                    >{name}</button>
                ))}
            </div>
            <Restaurant restaurant={restaurants[activeRestaurant]} />
        </div>
    </div>)
}