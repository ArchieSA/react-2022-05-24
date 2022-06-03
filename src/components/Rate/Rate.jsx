import React from 'react';
import styles from './styles.module.css';
import starEmpty from './img/star.svg';
import starGold from './img/star-gold.svg';

export const Rate = ({rate}) => {
    return (
        <div className={styles.root}>
            {[...Array(5).keys()].map((_, i) => (
                <img key={i} className={styles.icon} src={i < rate ? starGold : starEmpty}/>))}
        </div>
    );
}