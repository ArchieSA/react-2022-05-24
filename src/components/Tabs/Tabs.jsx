import React from "react";

import styles from './styles.module.css';

export const Tabs = ({restaurants, onClick, activeRestaurant}) => {
    return(
    <div className={styles.root}>
    <h1>Restaurants</h1>
    {restaurants.map((item, index) => (
        <button
            className={activeRestaurant === index ? styles.active : null}
            onClick={() => {onClick(index)}}
            key={item.id}>
            {item.name}
        </button>
    ))}
    </div>
    )
}