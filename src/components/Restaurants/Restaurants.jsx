import React, { useState } from 'react';
import { Restaurant } from "../Restaurant/Restaurant";

import styles from './styles.module.css';

export const Restaurants = ({ restaurants }) => {
    const [activeRestaurant, setActiveRestaurant] = useState(0);

    return (<div className={styles.root}>
        <div>
            <div className={styles.btn_wrapper}>
                <button
                    onClick={()=>setActiveRestaurant(0)}
                    className={styles.btn}
                >Dishoom
                </button>
                <button
                    onClick={()=>setActiveRestaurant(1)}
                    className={styles.btn}
                >Homeslice
                </button>
                <button
                    onClick={()=>setActiveRestaurant(2)}
                    className={styles.btn}
                >Fabrique
                </button>
                <button
                    onClick={()=>setActiveRestaurant(3)}
                    className={styles.btn}
                >Flat Iron
                </button>
            </div>
            <Restaurant restaurant={restaurants[activeRestaurant]} />
        </div>
    </div>)
}