import React from "react";

import Star from './imgs/star.svg';
import StarGold from './imgs/star-gold.svg'

import styles from'./styles.module.css';

const GoldStars = ({stars}) => {
    return Array.from({length: Math.ceil(stars)}, () => <img className={styles.star} src={StarGold} alt='gold-star'></img>);
}

const Stars = ({stars}) => {
    return Array.from({length: 5-Math.ceil(stars)}, () => <img className={styles.star} src={Star} alt='star'></img>);
}

export const Rate = ({rate, id}) => {
    return(
        <div key={id} className={styles.root}>
        <GoldStars stars={rate}/>
        {rate < 5 ? <Stars stars={rate}/> : null}
        </div>
    );
}
