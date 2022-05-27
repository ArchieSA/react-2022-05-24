import React from 'react';

import styles from'./styles.module.css';
import {Menu} from "../Menu/Menu";

export const Restaurant = ({ restaurant }) => {
    return (
        <div className={styles.root}>
            <h1>{restaurant.name}</h1>
            <Menu menu={restaurant.menu}/>
        </div>
    );
}