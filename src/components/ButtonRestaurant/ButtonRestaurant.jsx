import React from "react";
import styles from './styles.module.css';

export const ButtonRestaurant = ({ restaurants, setActiveRestaurant}) => {
    return (
        <div className={styles.root}>
            {restaurants.map((item, index) => (
                <button onClick={() => setActiveRestaurant(index)} key={item.id} className={styles.btn}>{item.name}</button>
            ))}
        </div>
    )
}