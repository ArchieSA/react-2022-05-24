import React from 'react'
import StarImg from './imgs/star.svg'
import StarGoldImg from './imgs/star-gold.svg'
import styles from './styles.module.css'

export const Rate = ({rate}) => {
    return (
        <div className={styles.stars}>
            {[...Array(5).keys()].map(
                (_, i) => i < rate 
                    ? <img key={i} className={styles.star} src={StarGoldImg} />
                    : <img key={i} className={styles.star} src={StarImg} />
            )}
        </div>
    );
}