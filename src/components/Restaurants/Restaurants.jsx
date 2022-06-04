import React, {useState} from 'react';
import { Restaurant } from "../Restaurant/Restaurant";
import { Tabs } from '../Tabs/Tabs';
import styles from './styles.module.css';

export const Restaurants = ({restaurants}) => {
    const [activeRestaurant, setActiveRestaurant] = useState(0);

    return (
        <div className={styles.root}>
            <div>
                <Tabs names={restaurants.map(r => r.name)} onChangeTab={id => setActiveRestaurant(id)} />
                <Restaurant restaurant={restaurants[activeRestaurant]}/>
            </div>
        </div>
    )
}