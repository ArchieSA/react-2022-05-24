// import React, {useEffect, useState} from 'react';
import React from 'react';
import Star from './imgs/star.svg'
import StarGold from './imgs/star-gold.svg'

import styles from './styles.module.css';

export const Rate = ({rate}) => {
   console.log(rate);
    return (
        <div className={styles.root}>
        <div className={styles.actions}>
            {[...Array(rate)].map((e, i) => <img src={StarGold} key={i} className={styles.icon} loading="lazy"/>)}
            {[...Array(5-rate)].map((e, i) => <img src={Star} key={i} className={styles.icon} loading="lazy"/>)}
        </div>
        </div>
    )
}