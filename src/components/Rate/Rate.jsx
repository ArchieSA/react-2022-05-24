import React from 'react';
import StarGold from './imgs/star-gold.svg';
import Star from './imgs/star.svg';
import styles from './styles.module.css';

export const Rate = ({ value }) => {
    const totalStars = 5;
    let stars = [];

    for (let i = 1; i <= totalStars; i++) {
        stars.push(
            i <= value ?
                <img key={i} src={StarGold} className={styles.star} loading="lazy" /> :
                <img key={i} src={Star} className={styles.star} loading="lazy" />
        );
    }
            
    
    return (
        <div className={styles.container}>
            {stars}
        </div>);
}

