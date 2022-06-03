import React from "react";
import styles from "./styles.module.css";


export const Tabs = ({restaurants, onClick, activeRestaurant}) => {
    return (<div className={styles.root}>
        {restaurants.map(({name}, index) => (
            <button
                key={index}
                onClick={() => onClick(index)}
                className={activeRestaurant === index ? styles.active : null}
            >{name}</button>
        ))}
    </div>)
}