import React from "react";

import styles from './styles.module.css';

export const Tabs = ({restaurants, onClick}) => {
    return (
        <div className={styles.tabs}>
            {restaurants.map(({name, id}, i) => {
                    return <button key={id} className={styles.item} onClick={() => onClick(i)}>{name}</button>
            })}
        </div>
    )
}

