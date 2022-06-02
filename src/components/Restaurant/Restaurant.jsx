import React from 'react';

import styles from'./styles.module.css';
import {Menu} from "../Menu/Menu";
import { Rate } from '../Rate/Rate';
import { Reviews } from '../Reviews/Reviews'

export const Restaurant = ({ restaurant }) => {
    return (
        <div className={styles.root}>
            <h1>{restaurant.name}</h1>
            <Rate value={4}/>
            <Menu menu={restaurant.menu}/>
            <Reviews reviews={restaurant.reviews}/>
        </div>
    );
}